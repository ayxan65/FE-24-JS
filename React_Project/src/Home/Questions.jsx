import React  from 'react';
import QuestionRight from "./QuestionRight";

const Questions = () => {
  return (
    <> 
    <div className="question-main">
        <div className="question-container">
            <div className="question-left">
                <div className="question-title">
               <span> Frequently</span> asked questions
                </div>
                <div className="question-footer">
                Contact us for more info
                </div>
            </div>
            <div className="question-right">
                <QuestionRight/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Questions