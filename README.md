
# REACT JOKES



##### Contributors: Trevor Rapp, Bob Ziroll

*this exercise was included as part of a Front End Developer course on Scrimba, taught by Bob Ziroll.  Though it was only a side-note in the lesson, I turned it into a full blown project to give myself extra practice*

---

<br>

![screenshot-localhost_3000-2022 03 02-07_54_45](https://user-images.githubusercontent.com/11747875/156386294-0178003b-a2e8-442a-a5e2-59beb3274268.png)

[![View Project](https://user-images.githubusercontent.com/11747875/141705232-471a0b9c-ca45-4540-a1b6-740c5e1becbe.png)](https://trrapp12.github.io/React-Jokes/)

<br>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<br>
<br>

---

### Description:

> "How do React components say 'You're welcome?'"
>
> "Prop you very much!"
>
> --AltAcademy, *Best React Jokes*


A basic static page built using React that utilizes props.

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

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [X] change in design elements
- [X] by changing the design of the project I created changes down stream that forced me to rebuild my components.  This was perfect because it forced me to create my own comoponents and practice passing down props through them.
- [X] my additional design changes eventually also created changes in how I wrote my state as well.
- [X] I eventually refactored the whole project again to give myself more practice and to improve the UX/UI.  This allowed me to build it again from scratch, without any help.
- [X] See redesigned, final project at <a href="https://tourmaline-medovik-1e81f3.netlify.app/">Dad Jokes</a>

---

### ATTRIBUTIONS

No additional attributions needed at this time.

---

### YOU CAN FIND ME AT:

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*



