import React from 'react'

function Jokes(props) {
  return (
    <div className="container">
      <div className="setup">{props.setup}</div>
      <div className="punchline">{props.punchline}</div>
    </div>

  )
}

export default Jokes