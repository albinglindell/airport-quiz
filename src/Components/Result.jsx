import React from 'react'
import { useLocation } from "react-router-dom";

function Result(props) {
    let location = useLocation()
    let correct = location.state.correct
    let wrong = location.state.wrong
    let restart = ()=>{
        location("/")
    }
  return (
    <div>
      <div style={{color:"green"}} className='correctVal'>{correct.map(country =>{
        return (
            <>
            🥂🥂🥂
            <p>{country.COUNTRY}</p>
            <p>{country.AIRPORT}</p>
            <p>{country.IATA}</p>
            🥂🥂🥂
            </>
        )
      })}</div>
      <div style={{color:"red"}} className='wrongVal'>{wrong.map(country => {
        return (
            <>
            🛑🛑🛑
            <p>{country.COUNTRY}</p>
            <p>{country.AIRPORT}</p>
            <p>{country.IATA}</p>
            🛑🛑🛑
            </>
        )
      })}</div>
      <button onClick={restart}>Restart!</button>
    </div>
  )
}

export default Result
