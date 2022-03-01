import React from 'react'

function Jokes(props) {
  return (
    <div className="setup">{props.setup}</div>
    <div className="punchline">{props.punchline}</div>
  )
}

export default Jokes