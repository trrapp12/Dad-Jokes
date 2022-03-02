import React from 'react'
import Jokes from './Jokes'

function App () {
  return (
    <div>
      <p>This is a project designed to practice using props in React.  For a look at what's going on under the hood, please see the GitHub repository at<a href="https://github.com/trrapp12/React-Jokes">React-Jokes</a>.  And while you're waiting, hover over the jokes to reveal the punchline!</p>
      <Jokes 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Jokes 
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Jokes 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Jokes 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Jokes 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>

  )
}

export default App