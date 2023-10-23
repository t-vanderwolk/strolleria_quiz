import '../styles/Main.css'
import logo from '../logo/logo.png'
import React, {useRef} from "react"
import {Link} from "react-router-dom"
export default function Main() {
    const inputRef= useRef(null)
  return (
    <div className="container">
        <img className='logo'src={logo}  alt='strolleria.com'  />
        <h1 className="title">Product Quiz</h1>
        <ol className='directions'>
            <li>You will be asked 10 questions one after another.</li>
            <li>You will get 10 points for each correct answer.</li>
            <li>This is a multiple choice quiz, only 1 answer can be selected.</li>
            <li>You can go back and review your answers before you finish the quiz.</li>
            <li>The results will be displayed at the end of the quiz. </li>
            <li>Create a username to start quiz. </li>

        </ol>
        <form id="form">
            <input ref={inputRef} className="userid"type="text" placeholder="Username*" />
        </form>
        <div className="start">
<Link className="btn"  to={'quiz'}>Start Quiz</Link>

        </div>
    </div>
  )
}