import React from 'react'
import Jokes from './Jokes'
import jokesData from './jokesData'

function App () {
  const jokesArray = jokesData.map((value) => {
    return <Jokes setup={value.setup} punchline={value.punchline} rating={value.rating} attribution={value.attribution} />
  })
  return (
    <div>
      <div className="p-container">
        <h1> React Props Practice: React Jokes</h1>
        <p>This is a project designed to practice using props in React.  For a look at what's going on under the hood, please see the GitHub repository at <a href="https://github.com/trrapp12/React-Jokes">React-Jokes</a>.  And while you're waiting, hover over the jokes to reveal the punchline!</p>
        <br></br>
        <p>Cheers,</p>
        <br></br>
        <p>T.R.Rapp</p>
      </div>
      {jokesArray}
    </div>

  )
}

export default App