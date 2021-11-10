import {IoIosAlert} from 'react-icons/io'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

import {MarkdownContent} from '@ib/markdown-content'
import '@ib/markdown-styles/MarkdownStyles.css'
import 'github-markdown-css'

import ButtonOptionItem from '../ButtonOptionItem'
import ImageOptionItem from '../ImageOptionItem'
import Select from '../Select'

import './index.css'

const optionsTypesList = {
  default: 'MULTIPLE_CHOICE',
  codeAnalysis: 'CODE_ANALYSIS_MULTIPLE_CHOICE',
  htmlText: 'HTML_TEXT',
  moreThanOneMultipleChoice: 'MORE_THAN_ONE_MULTIPLE_CHOICE',
  codeAnalysisMoreThanOnceMultipleChoice:
    'CODE_ANALYSIS_MORE_THAN_ONE_MULTIPLE_CHOICE',
}

// const optionsTypesList = {
//   default: 'TEXT',
//   markdown: 'MARKDOWN',
// }

const Question = props => {
  const {
    questionDetails,
    questionNumber,
    totalQuestions,
    updateAnsweredQuestions,
    userSelectedOptionId,
  } = props
  const {
    questionImageUrl,
    options,
    questionText,
    questionCode,
  } = questionDetails
  const {questionType, questionContentType} = questionDetails
  // const isSelectOptionType = contentType === optionsTypesList.singleSelect
  const isLastQuestion = questionNumber === totalQuestions
  console.log(questionDetails)
  const onClickNextQuestion = () => {
    const {goToNextQuestion} = props
    goToNextQuestion(questionNumber)
  }

  const renderImageOptions = () => (
    <ul className="image-options-list">
      {options.map(eachOption => (
        <ImageOptionItem
          key={eachOption.id}
          optionDetails={eachOption}
          updateAnsweredQuestions={updateAnsweredQuestions}
          isSelected={eachOption.id === userSelectedOptionId}
        />
      ))}
    </ul>
  )

  const renderButtonOptions = () => (
    <ul className="options-list">
      {options.map(eachOption => (
        <ButtonOptionItem
          key={eachOption.id}
          optionDetails={eachOption}
          updateAnsweredQuestions={updateAnsweredQuestions}
          isSelected={eachOption.id === userSelectedOptionId}
        />
      ))}
    </ul>
  )
  const renderOptions = () => {
    switch (questionType) {
      case optionsTypesList.default:
        return renderButtonOptions()
      case optionsTypesList.codeAnalysis:
        return renderButtonOptions()
      case optionsTypesList.moreThanOneMultipleChoice:
        return renderButtonOptions()
      case optionsTypesList.codeAnalysisMoreThanOnceMultipleChoice:
        return renderButtonOptions()
      default:
        return null
    }
  }

  const renderDefaultText = () => <p className="question">{questionText}</p>

  const renderMardownText = () => (
    <MarkdownContent
      // css={textCSS}
      className="markdown-body"
      content={questionText}
    />
  )

  const renderMultipleChoiceQuestion = () =>
    questionContentType !== 'MARKDOWN' && questionContentType !== 'HTML'
      ? renderDefaultText()
      : renderMardownText()

  const renderMoreThanOneMultipleChoiceQuestion = () =>
    questionContentType !== 'MARKDOWN' && questionContentType !== 'HTML'
      ? renderDefaultText()
      : renderMardownText()

  const renderQuestion = () => {
    switch (questionType) {
      case 'MULTIPLE_CHOICE':
        return renderMultipleChoiceQuestion()
      case 'CODE_ANALYSIS_MULTIPLE_CHOICE':
        return renderMardownText()
      case 'HTML_TEXT':
        return renderMardownText()
      case 'MORE_THAN_ONE_MULTIPLE_CHOICE':
        return renderMoreThanOneMultipleChoiceQuestion()
      case 'CODE_ANALYSIS_MORE_THAN_ONE_MULTIPLE_CHOICE':
        return renderMardownText()
      default:
        return null
    }
  }

  return (
    <div className="question-container">
      <div className="question-content">
        {renderQuestion()}
        {questionImageUrl !== null && (
          <img
            className="question-image"
            src={questionImageUrl}
            alt="question"
          />
        )}
        {questionCode !== null && (
          <AceEditor
            className="editor"
            fontSize={16}
            mode="javascript"
            theme="monokai"
            value={questionCode}
            width="100%"
            height="300px"
            showGutter
            readOnly
          />
        )}
        <hr className="horizontal-line" />
        {renderOptions()}
      </div>
      <div className="alert-and-next-button-container">
        {!isLastQuestion && (
          <div className="next-question-button-container">
            <button
              type="button"
              className="next-question-button"
              onClick={onClickNextQuestion}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Question
