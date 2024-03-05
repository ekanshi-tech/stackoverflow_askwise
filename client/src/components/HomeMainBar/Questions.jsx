import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-ans-container'>


      <div className="display-votes-ans">
      <p>{question.votes}</p>
      <p>votes</p>
      </div>


      <div className="display-votes-ans">
      <p>{question.noOfanswers}</p>
      <p>answers</p>
      </div>


      <div className="display-questions-details">
        <Link to={`/Questions/${question._id}`} className="display-title-link" > 
          {question.questionTitle} 
        </Link>

        <div className="display-tags-time">

          <div className="display-tags">
            {
              question.questionTag.map((tags)=>(
                <p key={tags}> {tags} </p>
              ))
            }
          </div>

          <p className="display-time">
            asked {question.askedOn} {question.userPosted}
          </p>
          
        </div>

      </div>

    </div>
  )
}

export default Questions