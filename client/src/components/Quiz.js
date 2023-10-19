import React from "react"
import Questions from './Questions';
export default function Quiz() {
// next button event handler
    function onNext(){
        console.log('On next click')
    }
// prev button event handler
    function onPrev(){
        console.log('On prev click')
    }
  return (
    <div className="container">
        
        <h1 className='title'>Product Quiz</h1>
        <Questions />
        
<div className="grid">


<button id="prev-btn" onClick={onPrev}>Prev</button>
{/* Display Questions */}

<button id="next-btn" onClick={onNext}>Next</button>

        </div>
    </div>
  )
}