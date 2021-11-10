import './index.css'

const QuestionNumberItem = props => {
  const {questionNumber, setActiveQuestionId, isAnswered, isActive} = props
  const answeredQuestionClassName = isAnswered ? 'answered-question-number' : ''
  const activeQuestionClassName = isActive ? 'active-question-number' : ''

  const onClickQuestionNumber = () => {
    setActiveQuestionId(questionNumber)
  }

  return (
    <li className="question-number-item">
      <button
        type="button"
        className={`${answeredQuestionClassName} ${activeQuestionClassName} question-number-button`}
        onClick={onClickQuestionNumber}
      >
        {questionNumber}
      </button>
    </li>
  )
}

export default QuestionNumberItem
