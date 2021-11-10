import './index.css'

const ButtonOptionItem = props => {
  const {optionDetails, isSelected, updateAnsweredQuestions} = props
  const {content} = optionDetails
  const buttonClassName = isSelected ? 'selected-button' : ''

  const onClickOption = () => {
    const {id} = optionDetails
    updateAnsweredQuestions(id)
  }

  return (
    <li className="button-option-item">
      <button
        type="button"
        className={`${buttonClassName} button-option`}
        onClick={onClickOption}
      >
        {content}
      </button>
    </li>
  )
}

export default ButtonOptionItem
