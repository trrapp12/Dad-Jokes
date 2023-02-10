import React from 'react'
import Jokes from './Jokes'
import jokesData from './jokesData'

function App () {

  const jokesArray = jokesData.map((value) => {
    return <Jokes setup={value.setup} punchline={value.punchline} rating={value.rating} attribution={value.attribution} />
  })

  function handleClick() {
    return (jokesArray[Math.floor(Math.random() * jokesArray.length) + 1])
  }

  let x = handleClick();


  return (
    <div className="master-container">
      <div className="circle"></div>
      <h1> Dad Jokes</h1>
      <div className="p-container">+
        <div className="p-and-button-container">
          <div className="p-divider-a">
            <p>This project demonstrates passing props in React.  See the code at <a href="https://github.com/trrapp12/React-Jokes">React-Jokes</a>.  And while you're waiting, enjoy a good Dad joke!</p>
            <br></br>
            <p>Cheers,</p>
            <br></br>
            <p>T.R.Rapp</p>
          </div>
          <div className="joke-and-button-container">
            <div className="p-divider-b">
              {x}
            </div>
            <button onClick={() => {handleClick()}}>Next &gt;&gt;&gt;</button>
          </div>
        </div>
      </div>
      <div className="second-circle">
          <div className="circle-gradient">
            <div className="circle2" id="circle2">
              <p id="circle2--p">click</p>
            </div>
          </div>
        </div>

    </div>

  )
}

export default App