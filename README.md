
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

* This was my first time in quite a while connecting to a Firebase database.  I had to reacquaint myself with it.  The process wasn't necessarily very hard, but it was probably the area I experienced the most growth as I had little exprience in it before.

* In the original instructions they created an eventlistener on a single dynamically created element so that when you double clicked on a list item it removed it from the list and the database.  For the sake of practice I decided to extend the process by adding a check mark which would have to detect the click, do a logic comparison to see if it's checked, and then remove the item.  While the logic isn't hard, it did require me to dynamically make a nested group of elements, along with dynamically assigning them id's and attributes and classes and then append an eventlistener onto them.  This added a few more steps of complexity than what hte original tutorial demanded.

```javascript  

function createList (el, value, id) {
    let newDiv = document.createElement('div');

    let newCheckBox = document.createElement('input')
    newCheckBox.setAttribute('type', 'checkbox')
    newCheckBox.setAttribute('id', `${id}`)

    let newItemListItem = document.createElement('li');
    let itemText = value
    newItemListItem.textContent = itemText;

    newDiv.append(newCheckBox)
    newDiv.classList.add('list-div')
    newDiv.append(newItemListItem)
    el.append(newDiv)

    newCheckBox.addEventListener('click', (event) => {
        if(event.currentTarget.checked) {
            console.log('checked', event.currentTarget)
            let refLocationDB = ref(database, `items/${id}`);
            remove(refLocationDB)
        } else {
            console.log('item is not checked')
        }
    })
}
    
```

* setting up an eventlistener that resembles a hover on a button, but that increases the scale of a background image to make it appear to "pop" out at you.  Normally the hover would be a simple ```:hover``` in CSS.  But to listen to something on element "A" that effects element "B" can't be accomplished by CSS.  But Javascript doesn't have a "hover" event.  Enter "mouseenter" and "mouseleave".  And how do you make sure the listener is applied after all elements are on the page?  I had to wrap it in another load eventlistener on the window object.

```javascript

window.addEventListener('load', () => {

    const playingCardDiv = document.querySelector('.playing-card')
    const addButton = document.querySelector('#add-button')

    addButton.addEventListener('mouseover', () => {
        playingCardDiv.style.transform = 'scale(1.02)'
    })

    addButton.addEventListener('mouseleave', () => {
        playingCardDiv.style.transform = 'scale(1.0)'
    })
})

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



