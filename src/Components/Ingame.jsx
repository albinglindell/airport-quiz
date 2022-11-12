import React from 'react'
import { useState } from 'react'
import Data from "../Data/Data.json"
import {Link} from "react-router-dom"


function Ingame() {
    const [questionNum, setQuestionNum]=useState(0)
    const [correct, setCorrect] = useState([])
    const [wrong, setWrong] = useState([])
    const [endGame, setEndGame] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const [correctAnswer, setCorrectAnswer]=useState("")
    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value.toUpperCase())
    console.log({correct,wrong})
    setCorrectAnswer("")
    };
    const correctAnswerBtn = ()=>{
      if(Data[questionNum].IATA === message){
        setCorrectAnswer("correct")
      }else{
        setCorrectAnswer("wrong")
      }
    }
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
        setCorrectAnswer("")
        setMessage("")
    }
  return (
    <div className='ingameScreen'>
      {!endGame ? <> <p className='progress'>{questionNum +1}/ 40</p>
    <div className="ingameContainer">
      <div className="country">
        <h2>Country: {Data[questionNum].COUNTRY}</h2>
      <h3></h3>
      </div>

      <div className="airport">
        <h2>Airport: {Data[questionNum].AIRPORT}</h2>
      </div>

      <div className="iata">
        <h2>Iata: <span className={correctAnswer}>{message}</span></h2>
      </div>

      <div className="inputContainer">
        <input className='inputVal' maxLength={3} id='iataVal' type="text" value={message} onChange={handleChange}/>
        <button className='nextBtn' onClick={nextBtn}>Next Country!</button> 
        <button className='correctBtn' onClick={correctAnswerBtn}>correct answer!</button>
      </div>
      </div>
      </>: 
      <div className="showAswer">
      <Link to={"/result"} state={{correct:correct, wrong:wrong}}>
      <button className='showAnswerBtn'>Show answers!</button> 
      </Link>
      </div>
      }
    </div>
  )
}

export default Ingame
