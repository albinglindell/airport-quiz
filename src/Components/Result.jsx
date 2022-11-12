import React from 'react'
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom"
function Result() {
    let location = useLocation()
    let correct = location.state.correct
    let wrong = location.state.wrong
    let restart = ()=>{
        location("/")
    }
  return (
    <div className='resultScreen'>
        <h1 className='header'>Results!</h1>
        <div className="resultContainer">

        
      <div  className='correctVal'>
      <h2>{correct.length}/40 right!</h2>
        {correct.map(country =>{
        return (
            <div className='answers'>
            <p>{country.COUNTRY}</p>
            <p>{country.AIRPORT}</p>
            <p>{country.IATA}</p>
            </div>
        )
      })}</div>
      <div className='wrongVal'>
      <h2>{wrong.length}/40 wrong!</h2>
        
        {wrong.map(country => {
        return (
            <div className='answers'>
            <p>{country.COUNTRY}</p>
            <p>{country.AIRPORT}</p>
            <p>{country.IATA}</p>
            </div>
        )
      })}</div>
      </div>
      <div className="restartBtnContainer">
        <Link to={"/"}>
      <button className='restartBtn' onClick={restart}>Restart!</button>
        </Link>
      </div>
    </div>
  )
}

export default Result
