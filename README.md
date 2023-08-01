
# REACT JOKES



##### Contributors: Trevor Rapp

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

### Project v1.0 demonstrates the following:

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
- [X] instead of dynamically creating one element, built it out to dynamically build out a nested element that also dynamically assigned classes, attributes, and added an eventlistener
- [X] using Javascript to imitate a "hover" effect in CSS
- [X] simplifying and refactoring code and breaking it out into a utility function file
- [X] AI generated artwork
- [ ] gamification principles
- [ ] Oauth

---

### ATTRIBUTIONS

<a href="https://www.flaticon.com/free-icons/skull" title="skull icons">Skull icons created by Smashicons - Flaticon</a>

Memento Mori is AI generated artwork by Trevor Rapp using <a href="https://www.imagine.art/">Imagine Art</a>.

---

### YOU CAN FIND ME AT:

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*



