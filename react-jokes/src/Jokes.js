import React from 'react'

function Jokes(props) {
  return (
    <div className="container">
      <div className="setup">{props.setup}</div>
      <div className="punchline">{props.punchline}</div>
      <div className="joke-meta-data">
        <div className="rating">rating {props.rating}  &#10032; </div>
        <div className="attribution">	-- {props.attribution}</div>
      </div>
      
    </div>

  )
}

export default Jokes