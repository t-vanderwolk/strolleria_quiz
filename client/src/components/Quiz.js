import React, { useEffect } from "react"
import Questions from './Questions';
import logo from '../logo/logo.png'

// redux store import 
import {useSelector} from 'react-redux'

export default function Quiz() {

const { questions }=useSelector(state => state)

useEffect(() => {
    console.log(questions.queue)
})
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
        <img className='logo'src={logo}  alt='strolleria.com'  />
        <h1 className="title">Product Quiz</h1>

        {/* <h1 className='title'>Product Quiz</h1> */}
        <Questions />
        
<div className="grid">


<button id="prev-btn" onClick={onPrev}>Prev</button>
{/* Display Questions */}

<button id="next-btn" onClick={onNext}>Next</button>

        </div>
    </div>
  )
}