import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const NoteContainer = styled.div`
  margin-top: 14%;
  background-color: rgba(255, 255, 255, .2);
  padding: 3em;
  transition: all 500ms ease-in-out;
  opacity: 0;
  z-index: 0;
`
function Jokes(props) {

  useEffect(() => {
    const noteContainer = document.querySelector("#root > div > div.p-container > div > div.joke-and-button-container > div > div")

    function applyOpacity() {
      noteContainer.style.transition = 'all 500ms ease-in-out';
      noteContainer.style.opacity = '1';
    }

    setTimeout(applyOpacity, 500)
          setTimeout(applyOpacity, 500)
  }, [props.state])

  return (
    <>
      <NoteContainer className="container">
        <div className="setup">{props.setup}</div>
        <div className="punchline">{props.punchline}</div>
        <div className="joke-meta-data">
          <div className="rating">rating {props.rating}  &#10032; </div>
          <div className="attribution">	-- {props.attribution}</div>
        </div>
      </NoteContainer>
    </>
  )
}

export default Jokes