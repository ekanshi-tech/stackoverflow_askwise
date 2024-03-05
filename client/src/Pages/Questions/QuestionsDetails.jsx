import React from 'react'
import {Link, useParams } from 'react-router-dom';
import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';

const QuestionsDetails = () => {

    const { id } = useParams();
  

    var questionsList=[{
        _id:'1',
        votes:2,
        upVotes:2,
        downVotes:1,
        userId:1,
        noOfanswers:2,
        questionTitle:"What is a Function?",
        questionBody:"It mean to  be",
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
        _id:'2',
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
        _id:'3',
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


  return (
    <div className='question-detail-page'>
        {
            questionsList=== null?
            <h1>Loading....</h1> :
            <>
                {
                    questionsList.filter((question) => question._id === id).map((question) =>(

                        <div key={question._id}>


                            <section className="question-details-container">


                                <h1>{question.questionTitle}</h1>

                                <div className="question-detail-container-2">


                                    <div className="ques-votes">

                                        <img src={upvote} alt=""  width='18' />
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={downvote} alt="" width='18' />

                                    </div>

                                    <div style={{width:"100%"}}>

                                        <p className='question-body'>{question.questionBody}</p>

                                        <div className='question-details-tag'>
                                            {
                                            question.questionTag.map((tag) => (
                                                <p key={tag}>
                                                    {tag}
                                                </p>
                                            ))
                                            }
                                        </div>

                                        <div className="question-actions-user">
                                            <div>
                                            <button type="submit">Share</button>
                                            <button type="button">Delete</button>
                                            </div>

                                            <div>
                                                <p>asked {question.askedOn}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' style=  {{color:"#0086d8"}}>
                                                    <Avatar backgroundColor="orange" px="8px" py="5px">{question.   userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>{question.userPosted}</div>
                                                </Link>
                                            </div>

                                        </div>


                                    </div>

                                </div>

                            </section>

                            {
                                question.noOfanswers !==0 && (
                                    <section>
                                        <h3>{question.noOfanswers} answers</h3>
                                        <DisplayAnswer key={question._id} question={question}/>
                                    </section>
                                )
                            }
                            <section className="post-ans-container">
                                <h3>Your Answer</h3>
                                <form>
                                    <textarea name="" id="" cols="30" rows="10"></textarea> <br />
                                    <input type="submit" value="Post Your Answer" className='post-ans-btn' />
                                </form>
                                <p>Browse other Question tagged
                                    {
                                        question.questionTag.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{textDecoration:"none" ,color:"#009dff"}}> ask your own questions </Link>
                                    </p>
                            </section>


                        </div>
                    ))
                }
            </>
        }
   
    </div>
  )
}

export default QuestionsDetails