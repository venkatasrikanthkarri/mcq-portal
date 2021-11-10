import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {v4 as uuidv4} from 'uuid'

import EvaluationContext from '../../context/EvaluationContext'

import Question from '../Question'
import Header from '../Header'
import AssessmentConfiguration from '../AssessmentConfiguration'

import originalMockData from './originalMockData.json'

import './index.css'

const assessmentDurationInSeconds = 600
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Assessment extends Component {
  state = {
    questionsData: [],
    totalQuestions: 0,
    answeredQuestionsList: [],
    activeQuestionId: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAssessmentData()
  }

  getQuestionContentType = question => {
    const questionType = question.question_type
    console.log(65465, questionType)
    if (questionType === 'MULTIPLE_CHOICE') {
      return question.question.content_type
    }
    if (questionType === 'HTML_TEXT') {
      return question.content_type
    }
    return null
  }

  getFormattedOptions = question => {
    const questionType = question.question_type
    if (
      questionType === 'MULTIPLE_CHOICE' ||
      questionType === 'MORE_THAN_ONE_MULTIPLE_CHOICE'
    ) {
      return question.options.map(eachOption => {
        const optionDetails = {
          id: uuidv4(),
          content: eachOption.content,
          contentType: eachOption.content_type,
          isCorrect: eachOption.is_correct,
        }
        if (!eachOption.image_url) {
          return optionDetails
        }
        optionDetails.imageUrl = eachOption.image_url
        return optionDetails
      })
    }

    if (
      questionType === 'CODE_ANALYSIS_MULTIPLE_CHOICE' ||
      questionType === 'CODE_ANALYSIS_MORE_THAN_ONE_MULTIPLE_CHOICE'
    ) {
      const wrongAnswers = question.input_output[0].wrong_answers.map(
        eachOption => ({
          id: uuidv4(),
          content: eachOption,
          contentType: 'TEXT',
          isCorrect: false,
        }),
      )
      const correctAnswers = question.input_output[0].output.map(
        eachOption => ({
          id: uuidv4(),
          content: eachOption,
          contentType: 'TEXT',
          isCorrect: true,
        }),
      )
      const options = [...correctAnswers, ...wrongAnswers]
      return options
    }
    return null
  }

  getQuestionImage = question => {
    // console.log(question.question.multimedia.length)

    const questionType = question.question_type
    if (
      questionType !== 'CODE_ANALYSIS_MULTIPLE_CHOICE' &&
      questionType !== 'CODE_ANALYSIS_MORE_THAN_ONE_MULTIPLE_CHOICE' &&
      questionType !== 'HTML_TEXT'
    ) {
      const questionMultimedia = question.question.multimedia.length
      if (questionMultimedia !== 0) {
        return question.question.multimedia[0].url
      }
    }
    return null
  }

  getQuestionCode = question => {
    const questionType = question.question_type
    if (
      questionType === 'CODE_ANALYSIS_MULTIPLE_CHOICE' ||
      questionType === 'CODE_ANALYSIS_MORE_THAN_ONE_MULTIPLE_CHOICE'
    ) {
      return question.code_metadata[0].code_data
    }
    if (questionType === 'HTML_TEXT') {
      return question.default_code_metadata.code_data
    }
    return null
  }

  getQuestionText = question => {
    const questionType = question.question_type
    if (
      questionType === 'CODE_ANALYSIS_MULTIPLE_CHOICE' ||
      questionType === 'CODE_ANALYSIS_MORE_THAN_ONE_MULTIPLE_CHOICE' ||
      questionType === 'HTML_TEXT'
    ) {
      return question.question_text
    }
    if (
      questionType === 'MULTIPLE_CHOICE' ||
      questionType === 'MORE_THAN_ONE_MULTIPLE_CHOICE'
    ) {
      return question.question.content
    }
    return null
  }

  getAssessmentData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const questionsApiUrl = 'https://apis.ccbp.in/assess/questions'
    const response = await fetch(questionsApiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const {questions, total} = originalMockData
      const updatedQuestionsData = questions.map(eachQuestion => ({
        id: uuidv4(),
        questionText: this.getQuestionText(eachQuestion),
        questionCode: this.getQuestionCode(eachQuestion),
        questionImageUrl: this.getQuestionImage(eachQuestion),
        questionType: eachQuestion.question_type,
        questionContentType: this.getQuestionContentType(eachQuestion),
        options: this.getFormattedOptions(eachQuestion),
      }))
      this.setState({
        questionsData: updatedQuestionsData,
        totalQuestions: total,
        activeQuestionId: updatedQuestionsData[0].id,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="loader">
      <Loader type="ThreeDots" color="#263868" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-assess-failure-img.png"
        className="failure-view-img"
      />
      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
      <p className="failure-view-description">We are having some trouble.</p>
      <button
        type="button"
        className="retry-button"
        onClick={this.getAssessmentData}
      >
        Retry
      </button>
    </div>
  )

  setActiveQuestionId = questionNumber => {
    const {questionsData} = this.state
    const questionId = questionsData[questionNumber - 1].id
    this.setState({activeQuestionId: questionId})
  }

  goToResultsPage = () => {
    const {history} = this.props
    history.replace('/results')
  }

  evaluateAnswers = () => {
    const {answeredQuestionsList, questionsData} = this.state
    let score = 0
    answeredQuestionsList.forEach(eachAnsweredQuestion => {
      const {questionId, optionId} = eachAnsweredQuestion
      const questionDetails = questionsData.find(
        eachQuestion => eachQuestion.id === questionId,
      )

      const correctOptionDetails = questionDetails.options.find(
        eachOption => eachOption.isCorrect === true,
      )
      if (correctOptionDetails.id === optionId) {
        score += 1
      }
    })
    return score
  }

  renderAssessmentConfiguration = () => (
    <EvaluationContext.Consumer>
      {evaluationValues => {
        const {setScore, setTimeTakenInSeconds} = evaluationValues
        const {
          answeredQuestionsList,
          totalQuestions,
          activeQuestionId,
          questionsData,
        } = this.state
        const questionIds = questionsData.map(eachQuestion => eachQuestion.id)

        const submitAssessment = timeLeftInSeconds => {
          const score = this.evaluateAnswers()
          const timerInSeconds = assessmentDurationInSeconds - timeLeftInSeconds
          setScore(score)
          setTimeTakenInSeconds(timerInSeconds)
          this.goToResultsPage()
        }

        return (
          <AssessmentConfiguration
            totalQuestions={totalQuestions}
            activeQuestionId={activeQuestionId}
            questionIds={questionIds}
            setActiveQuestionId={this.setActiveQuestionId}
            submitAssessment={submitAssessment}
            isQuestionAnswered={this.isQuestionAnswered}
            answeredQuestionsCount={answeredQuestionsList.length}
          />
        )
      }}
    </EvaluationContext.Consumer>
  )

  goToNextQuestion = questionNumber => {
    const {totalQuestions} = this.state
    const nextQuestionNumber = questionNumber + 1
    if (nextQuestionNumber <= totalQuestions) {
      this.setActiveQuestionId(nextQuestionNumber)
    }
  }

  getSelectedOptionId = () => {
    const {activeQuestionId, answeredQuestionsList, questionsData} = this.state
    const activeQuestionDetails = questionsData.find(
      eachQuestion => eachQuestion.id === activeQuestionId,
    )
    const answeredQuestion = answeredQuestionsList.find(
      eachQuestion => eachQuestion.questionId === activeQuestionDetails.id,
    )
    if (answeredQuestion) {
      return answeredQuestion.optionId
    }
    return ''
  }

  isQuestionAnswered = questionId => {
    const {answeredQuestionsList} = this.state
    const isAnswered = answeredQuestionsList.find(
      eachQuestion => eachQuestion.questionId === questionId,
    )
    if (isAnswered) {
      return true
    }
    return false
  }

  updateAnsweredQuestions = optionId => {
    const {activeQuestionId} = this.state
    if (this.isQuestionAnswered(activeQuestionId)) {
      this.setState(prevState => ({
        answeredQuestionsList: prevState.answeredQuestionsList.map(
          eachAnsweredQuestion => {
            if (activeQuestionId === eachAnsweredQuestion.questionId) {
              return {
                ...eachAnsweredQuestion,
                optionId,
              }
            }
            return eachAnsweredQuestion
          },
        ),
      }))
    } else {
      const newAnsweredQuestion = {
        questionId: activeQuestionId,
        optionId,
      }
      this.setState(prevState => ({
        answeredQuestionsList: [
          ...prevState.answeredQuestionsList,
          newAnsweredQuestion,
        ],
      }))
    }
  }

  renderAssessmentView = () => {
    const {activeQuestionId, questionsData, totalQuestions} = this.state

    const activeQuestionDetails = questionsData.find(
      eachQuestion => eachQuestion.id === activeQuestionId,
    )

    const questionIndex = questionsData.findIndex(
      eachQuestion => eachQuestion.id === activeQuestionId,
    )
    const activeQuestionNumber = questionIndex + 1

    return (
      <>
        {this.renderAssessmentConfiguration()}
        <Question
          questionDetails={activeQuestionDetails}
          questionNumber={activeQuestionNumber}
          totalQuestions={totalQuestions}
          updateAnsweredQuestions={this.updateAnsweredQuestions}
          userSelectedOptionId={this.getSelectedOptionId()}
          goToNextQuestion={this.goToNextQuestion}
        />
      </>
    )
  }

  renderAssessment = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAssessmentView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="assessment-container">
        <Header />
        <div className="assessment">
          <div className="assessment-responsive-container">
            {this.renderAssessment()}
          </div>
        </div>
      </div>
    )
  }
}

export default Assessment
