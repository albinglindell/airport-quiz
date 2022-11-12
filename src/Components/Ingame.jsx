import React from 'react'
import { useState } from 'react'
import Data from "../Data/Data.json"
import {Link} from "react-router-dom"

const randomData = Data.sort(() => 0.5 - Math.random());

function Ingame() {
    const [questionNum, setQuestionNum]=useState(0)
    const [correct, setCorrect] = useState([])
    const [wrong, setWrong] = useState([])
    const [correction, setCorrection] = useState(false)
    const [endGame, setEndGame] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const [correctAnswer, setCorrectAnswer]=useState("")
    const [message, setMessage] = useState('');
    const [nextBtnval, setNextBtnval] = useState(false);



  const handleChange = event => {
    setMessage(event.target.value.toUpperCase())

    setCorrectAnswer("")
    };
    const correctAnswerBtn = ()=>{
      if(randomData[questionNum].IATA === message){
        setCorrectAnswer("correct")
        setCorrection(false)
      }else{
        setCorrectAnswer("wrong")
        setCorrection(true)
      }
      setNextBtnval(true)
    }
    let nextBtn = ()=>{
      
        if(message.toUpperCase() === randomData[questionNum].IATA){
            console.log("rätt!")
            setCorrect([...correct, randomData[questionNum]])                
            
        }else{
            console.log("fel!")
            setWrong([...wrong, randomData[questionNum]])                
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
        setCorrection(false)
        setNextBtnval(false)
        setMessage("")
    }
  return (
    <div className='ingameScreen'>
      {!endGame ? <> <p className='progress'>{questionNum +1}/ 40</p>
    <div className="ingameContainer">
      <div className="country">
        <h2>Country: {randomData[questionNum].COUNTRY}</h2>
      </div>

      <div className="airport">
        <h2>Airport: {randomData[questionNum].AIRPORT}</h2>
      </div>

      <div className="iata">
        <h2>IATA: <span className={correctAnswer}>{message}</span></h2>
      </div>

      <div className="correctIata">
        {correction && <h2>Correct answer: <span className='correct'>{randomData[questionNum].IATA}</span></h2>}
      </div>

      <div className="inputContainer">
        {!nextBtnval && <input className='inputVal' maxLength={3} id='iataVal' type="text" value={message} onChange={handleChange}/>}
        {nextBtnval &&<button className='nextBtn' onClick={nextBtn}>Next Country!</button> }
        {!nextBtnval &&<button className='correctBtn' onClick={correctAnswerBtn}>correct answer!</button>}
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
