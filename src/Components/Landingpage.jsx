import React from 'react'
import { Link } from 'react-router-dom'
function Landingpage({Data}) {

  return (
    <div className='laningpageContainer'>
        <h1 className='header'>IATA Quiz</h1>
        <Link to={"/ingame"} state={Data}>
          <button className='startBtn'>Start Quiz</button>
        </Link>
    </div>
  )
}

export default Landingpage
