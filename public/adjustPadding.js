(() => {
  console.log('adjustPadding found');

  function throttle(func, wait) {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= wait) {
        lastTime = now;
        func.apply(this, args);
      }
    };
  }

  function resolveOverlap() {
    const divA = document.getElementById('circle');
    const divB = document.getElementById('container');

    if (!divA || !divB) {
      console.log('Elements not found.');
      return;
    }

    // Get bounding rectangles
    const rectA = divA.getBoundingClientRect();
    const rectB = divB.getBoundingClientRect();

    // Check for overlap
    function isOverlapping() {
      console.log('isOverlapping fired');
      return !(
        rectA.right < rectB.left ||
        rectA.left > rectB.right ||
        rectA.bottom < rectB.top ||
        rectA.top > rectB.bottom
      );
    }

    // Increase padding until no overlap
    let padding = parseInt(window.getComputedStyle(divB).paddingLeft, 10);
    let stepSize = 5;
    while (isOverlapping() && padding < 100) {
      // Added a max limit to prevent infinite loops
      console.log('adjusting padding');
      padding += stepSize;
      divB.style.paddingLeft = `${padding}px`;
    }

    console.log(`Padding adjusted to ${padding}px to resolve overlap.`);
  }

  // Create a throttled version of the resolveOverlap function
  const throttledResolveOverlap = throttle(resolveOverlap, 100);

  // Attach event listeners
  window.addEventListener('resize', throttledResolveOverlap);
  document.addEventListener('DOMContentLoaded', throttledResolveOverlap);
})();
