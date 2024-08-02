import React, { useEffect, useState } from 'react';
import Jokes from './Jokes';
import jokesData from './jokesData';

function App() {
  // state has to be below jokes so that it initiates with something inside the array
  const [state, updateState] = useState([]);
  console.log(state);

  function addScript(source) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = source;
    document.body.appendChild(script);
  }

  const jokesComponentArray = jokesData.map((value) => {
    return (
      <Jokes
        setup={value.setup}
        punchline={value.punchline}
        rating={value.rating}
        attribution={value.attribution}
        state={state}
      />
    );
  });

  function chooseJoke(arr) {
    return arr[Math.floor(Math.random() * jokesComponentArray.length)];
  }

  let jokes = chooseJoke(jokesComponentArray);

  function clickHandler() {
    updateState(chooseJoke(jokesComponentArray));
  }

  useEffect(() => {
    addScript('./words.js');
    addScript('./adjustPadding.js');
  }, [jokes]);

  return (
    <div
      key={Math.random()}
      className='master-container'>
      <div
        id='circle'
        className='circle'></div>
      <h1> Dad Jokes</h1>
      <div className='p-container'>
        +
        <div className='p-and-button-container'>
          <div className='p-divider-a'>
            <p>
              This project demonstrates passing props in React. See the code at{' '}
              <a href='https://github.com/trrapp12/React-Jokes'>React-Jokes</a>.
              And while you're waiting, hover to enjoy a good Dad joke!
            </p>
            <br></br>
            <p>Cheers,</p>
            <br></br>
            <p>T.R.Rapp</p>
          </div>
          <div className='joke-and-button-container'>
            <div className='p-divider-b'>{state}</div>
            <button onClick={clickHandler}>Next &gt;&gt;&gt;</button>
          </div>
        </div>
      </div>
      <div className='second-circle'>
        <div className='circle-gradient'>
          <div
            className='circle2'
            id='circle2'>
            <p id='circle2--p'></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
