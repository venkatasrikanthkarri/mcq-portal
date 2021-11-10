import QuestionNumberItem from '../QuestionNumberItem'

import './index.css'

const QuestionPalette = props => {
  const {
    isQuestionAnswered,
    totalQuestions,
    activeQuestionId,
    questionIds,
    setActiveQuestionId,
    submitAssessment,
    answeredQuestionsCount,
  } = props
  const unansweredQuestionCount = totalQuestions - answeredQuestionsCount

  const onSubmit = () => {
    submitAssessment()
  }

  const renderQuestionNumbers = () => (
    <div className="question-numbers-container">
      <h1 className="question-numbers-heading">Questions ({totalQuestions})</h1>
      <ul className="question-numbers-list">
        {questionIds.map((eachQuestionId, index) => (
          <QuestionNumberItem
            key={eachQuestionId}
            questionNumber={index + 1}
            setActiveQuestionId={setActiveQuestionId}
            isAnswered={isQuestionAnswered(eachQuestionId)}
            isActive={activeQuestionId === eachQuestionId}
          />
        ))}
      </ul>
    </div>
  )

  return (
    <div className="question-palette-container">
      <div className="questions-summary-container">
        <div className="questions-status-container">
          <div className="answered-questions-count-container">
            <p className="answered-questions-count ">
              {answeredQuestionsCount}
            </p>
          </div>
          <p className="questions-count-text">Answered Questions</p>
        </div>
        <div className="questions-status-container">
          <div className="unanswered-questions-count-container">
            <p className="unanswered-questions-count ">
              {unansweredQuestionCount}
            </p>
          </div>
          <p className="questions-count-text">Unanswered Questions</p>
        </div>
      </div>
      <hr className="horizontal-line" />
      {renderQuestionNumbers()}
      <button type="button" className="submit-assessment" onClick={onSubmit}>
        Submit Assessment
      </button>
    </div>
  )
}

export default QuestionPalette
