
# REACT JOKES



##### Contributors: Trevor Rapp

*this is a remake of a previous project, React Jokes*

---

<br>

[![View Project](https://user-images.githubusercontent.com/11747875/141705232-471a0b9c-ca45-4540-a1b6-740c5e1becbe.png)](https://groan-worthy-dad-jokes.com/)

<br/>

[![screenshot-localhost_3000-2022 03 02-07_54_45](https://user-images.githubusercontent.com/11747875/156386294-0178003b-a2e8-442a-a5e2-59beb3274268.png)](https://user-images.githubusercontent.com/11747875/218291297-69f36beb-ccfd-4657-832b-f80a25814d69.mp4)

<br>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<br>

---

### DESCRIPTION

> "How do React components say 'You're welcome?'"
>
> "Prop you very much!"
>
> --AltAcademy, *Best React Jokes*


*A basic static page built using React that utilizes props.*

<br/>

---

### QUICKSTART GUIDE

To use the app simply click on the ```View Project``` button or visit <a href="https://groan-worthy-dad-jokes.com/">https://groan-worthy-dad-jokes.com/</a>. 

<br/>

---

### PROJECT DEMONSTRATES THE FOLLOWING:

- [x] Use of JSX
- [x] Use of basic syntax and architecture of React
- [x] Use of parent > child components
- [x] Use of custom composable, reusable components
- [x] Use of Bable and Webpack through Create React App
- [x] Use of git CLI and GitHub repositories
- [x] Use of CSS and images in React environment
- [x] Use of import and export statements
- [x] Use of local server with webpack

<br/>

---

### CHALLENGES I OVERCAME...

* I wanted to apply an opacity effect, but was struggling to do it with CSS because React hadn't rendered the DOM yet.  This was totally a new concept for me, so I had to figure out how to use a useEffect() and I combined it with a setTimeOut to get the timing correct.

```javascript  

  useEffect(() => {
    const noteContainer = document.querySelector("#root > div > div.p-container > div > div.joke-and-button-container > div > div")

    function applyOpacity() {
      noteContainer.style.transition = 'all 500ms ease-in-out';
      noteContainer.style.opacity = '1';
    }

    setTimeout(applyOpacity, 500)
          setTimeout(applyOpacity, 500)
  }, [props.state])
    
```

<br>

* In my designs I found that there were two elements that would overlapping, which I wanted, but the one would often make the text within the other unreadable...not acceptable.  So I researched a way to calculate the positions of both relative to eachother and adjust padding when needed.  This became a very expensive operation to do though, so I had to modify it later with a debouncer.  See below:

``` (() => {
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

```

<br/>

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [X] this was a remake of a previous project.  The work is my own, though I brought the jokes from the previous project.  I cannot take credit for any of their brilliance. 

---

### ATTRIBUTIONS

* No additional attributions needed at this time.

<br/>

---

### YOU CAN FIND ME AT:

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*



