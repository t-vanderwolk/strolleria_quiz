import React from "react"
import { Link } from "react-router-dom"
import logo from '../logo/logo.png'
import '../styles/Result.css'
import ResultTable from "./ResultTable"
export default function Result() {

    function onRestart(){
        console.log('on Restart')
    }
  return (
    
    <div className="container"> 
    <img className='logo'src={logo}  alt='strolleria.com'  />
    <h1 className="title text-light">Product Quiz</h1>

    <div className="result flex-center">
    <div className="flex">
        <span>Username</span>
        <span className="bold">Daily Tuition</span>
    </div>
    <div className="flex">
        <span>Total Quiz Points : </span>
        <span className="bold">50</span>

        </div>
        <div className="flex">
        <span>Total Questions</span>
        <span className="bold">10</span>

        </div>
        <div className="flex">
        <span>Total Attempts :</span>
        <span className="bold">03</span>

        </div>
        <div className="flex">
        <span>Total Earn Points</span>
        <span className="bold">50</span>

        </div>
        </div>
        <div className="flex">
        <span>Quiz Result</span>
        <span className="bold">Passed</span>
        <div className="start">
            <Link className="btn" to={'/'} onClick={onRestart}>Restart</Link>
        </div>
   <div className="container">
    {/* result table */}
<ResultTable />

   </div>


        </div>
    </div>


  )
}