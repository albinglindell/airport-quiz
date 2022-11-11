import React from 'react'
import { Link } from 'react-router-dom'
function Landingpage({Data}) {

  return (
    <div>
        <h1>IATA Quiz</h1>
        <Link to={"/ingame"} state={Data}>
          <button>Start Quiz</button>
        </Link>
    </div>
  )
}

export default Landingpage
