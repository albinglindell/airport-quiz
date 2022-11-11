import React from 'react'
import { useState } from 'react'
import Data from "../Data/Data.json"
import {Link, useNavigate} from "react-router-dom"


function Ingame({ setStarting}) {
    const [questionNum, setQuestionNum]=useState(37)
    const [correct, setCorrect] = useState([])
    const [wrong, setWrong] = useState([])
    const [endGame, setEndGame] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    let [stats]= useState({correct:correct,wrong:wrong})
    const navigate = useNavigate()
 
    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value)
    console.log({correct,wrong})
    

  };
    let nextBtn = ()=>{
      
        if(message.toUpperCase() === Data[questionNum].IATA){
            console.log("rätt!")
            setCorrect([...correct, Data[questionNum]])                
            
        }else{
            console.log("fel!")
            setWrong([...wrong, Data[questionNum]])                
        }
        if(questionNum === 38){
            setShowBtn(!showBtn)
        }
        if(questionNum < 39){
          setQuestionNum(preState => preState + 1)
         
        }else if(questionNum===39){
          setEndGame(true)
          console.log({correct,wrong})

        }
        setMessage("")
        console.log(Data.length, questionNum)
        
    }
  return (
    <div>
      {!endGame ? <> <p>{questionNum +1}/ 40</p>
      <h2>Airport</h2>
      <h3>{Data[questionNum].AIRPORT}</h3>
      <input id='iataVal' type="text" value={message} onChange={handleChange}/>
      <button onClick={nextBtn}>Next Country!</button> 
      </>: 
      <Link to={"/result"} state={{correct:correct, wrong:wrong}}>
      <button>Show answers!</button> 
      </Link>
      }
    </div>
  )
}

export default Ingame
