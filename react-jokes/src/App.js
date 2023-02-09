import React from 'react'
import Jokes from './Jokes'
import jokesData from './jokesData'

function App () {
  const jokesArray = jokesData.map((value) => {
    return <Jokes setup={value.setup} punchline={value.punchline} rating={value.rating} attribution={value.attribution} />
  })


  let randInt = Math.floor(Math.random() * jokesArray.length) + 1

  console.log(randInt)

  return (
    <div className="master-container">
      <div className="circle"></div>
      <h1> Dad Jokes</h1>
      <div className="p-container">
        <div className="p-divider-a">
          <p>This is a project demonstrates passing props in React.  See the code at <a href="https://github.com/trrapp12/React-Jokes">React-Jokes</a>.  And while you're waiting, enjoy a good Dad joke!</p>
          <br></br>
          <p>Cheers,</p>
          <br></br>
          <p>T.R.Rapp</p>
        </div>
        <div className="p-divider-b">
          {jokesArray[randInt]}
        </div>
      </div>

    </div>

  )
}

export default App