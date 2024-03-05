import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './HomeMainBar.css'

import QuestionList from './QuestionList'

const HomeMainBar = () => {
  
var questionsList=[{
  _id:1,
  votes:2,
  upVotes:2,
  downVotes:1,
  userId:1,
  noOfanswers:2,
  questionTitle:"What is a Function?",
  questionBody:"It mean to be",
  questionTag:["java","python","css"],
  userPosted:"mano",
  askedOn:"jan 1",
  answer:[{
    answerBody:"HSDIJCHBJSBCJKB",
    userAnswered:"Ankit",
    answeredOn:"jan 3",
    userId:2,
  }]
},
{
  _id:2,
  votes:3,
  upVotes:2,
  downVotes:1,
  userId:2,
  noOfanswers:0,
  questionTitle:"What is a Function?",
  questionBody:"It mean to be",
  questionTag:["java","python","css"],
  userPosted:"mano",
  askedOn:"jan 1",
  answer: [{
    answerBody:"HSDIJCHBJSBCJKB",
    userAnswered:"Ankit",
    answeredOn:"jan 3",
    userId:3,
  }]
},
{
  _id:3,
  votes:1,
  upVotes:2,
  downVotes:1,
  userId:3,
  noOfanswers:0,
  questionTitle:"What is a Function?",
  questionBody:"It mean to be",
  questionTag:["java","python","css"],
  userPosted:"mano",
  askedOn:"jan 1",
  answer: [{
    answerBody:"HSDIJCHBJSBCJKB",
    userAnswered:"Ankit",
    answeredOn:"jan 3",
    userId:1,
  }]
}]

  var user=1;

  const location=useLocation()

  const navigate=useNavigate();

  const check= ()=>{
    if(user === null){
      alert("LogIn or SignUp to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }


  return (

    <div className='home-bar'>
      <div className='home-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> :
          <h1>All Questions</h1>
        }
        <button onClick={check} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList === null ?
          <h1>Loading......</h1> :
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainBar