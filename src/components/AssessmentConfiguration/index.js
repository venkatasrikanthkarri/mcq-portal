import {Component} from 'react'

import Timer from '../Timer'
import QuestionPalette from '../QuestionPalette'

import './index.css'

const assessmentDurationInSeconds = 600
class AssessmentConfiguration extends Component {
  state = {
    timeLeftInSeconds: assessmentDurationInSeconds,
  }

  componentDidMount() {
    this.setTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  setTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  clearTimer = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    const {timeLeftInSeconds} = this.state
    const {submitAssessment} = this.props
    if (timeLeftInSeconds === 1) {
      submitAssessment(timeLeftInSeconds - 1)
    } else {
      this.setState(prevState => ({
        timeLeftInSeconds: prevState.timeLeftInSeconds - 1,
      }))
    }
  }

  onSubmitAssessment = () => {
    const {submitAssessment} = this.props
    const {timeLeftInSeconds} = this.state
    this.clearTimer()
    submitAssessment(timeLeftInSeconds)
  }

  render() {
    const {timeLeftInSeconds} = this.state
    const {
      totalQuestions,
      activeQuestionId,
      questionIds,
      setActiveQuestionId,
      answeredQuestionsCount,
      isQuestionAnswered,
    } = this.props

    return (
      <div className="assessment-configuration-container">
        <Timer timeLeftInSeconds={timeLeftInSeconds} />
        <QuestionPalette
          totalQuestions={totalQuestions}
          activeQuestionId={activeQuestionId}
          questionIds={questionIds}
          setActiveQuestionId={setActiveQuestionId}
          submitAssessment={this.onSubmitAssessment}
          isQuestionAnswered={isQuestionAnswered}
          answeredQuestionsCount={answeredQuestionsCount}
        />
      </div>
    )
  }
}

export default AssessmentConfiguration
