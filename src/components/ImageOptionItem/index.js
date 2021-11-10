import './index.css'

const ImageOptionItem = props => {
  const {optionDetails, isSelected, updateAnsweredQuestions} = props
  const {imageUrl, id, text} = optionDetails
  const imageClassName = isSelected ? 'active' : ''

  const onClickOption = () => {
    updateAnsweredQuestions(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="image-button" onClick={onClickOption}>
        <img src={imageUrl} alt={text} className={`${imageClassName} image`} />
      </button>
    </li>
  )
}

export default ImageOptionItem
