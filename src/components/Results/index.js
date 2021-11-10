import EvaluationContext from '../../context/EvaluationContext'

import Header from '../Header'

import './index.css'

const initialScore = 0
const initialTime = 0
const assessmentDurationInSeconds = 600

const ScoreCard = props => (
  <EvaluationContext.Consumer>
    {evaluationValues => {
      const {
        score,
        timeTakenInSeconds,
        setScore,
        setTimeTakenInSeconds,
      } = evaluationValues
      const isTimeUp = assessmentDurationInSeconds - timeTakenInSeconds === 0

      const getTimeLeftInFormat = () => {
        const hours = Math.floor(timeTakenInSeconds / 3600)
        const minutes = Math.floor((timeTakenInSeconds % 3600) / 60)
        const seconds = (timeTakenInSeconds % 3600) % 60
        const stringifiedHours = hours > 9 ? hours : `0${hours}`
        const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
        const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

        return `${stringifiedHours}:${stringifiedMinutes}:${stringifiedSeconds}`
      }

      const resetScoreAndTime = () => {
        setScore(initialScore)
        setTimeTakenInSeconds(initialTime)
      }

      const goToAssessmentPage = () => {
        const {history} = props
        resetScoreAndTime()
        history.replace('/assessment')
      }

      const renderSubmitView = () => {
        const formattedTimeTaken = getTimeLeftInFormat(timeTakenInSeconds)
        return (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-assess-submit-img.png"
              alt="submit"
              className="submit-image"
            />
            <h1 className="congrats-heading">
              Congrats! You completed the assessment.
            </h1>
            <div className="time-taken-container">
              <p className="time-taken">Time Taken:</p>
              <p className="time">{formattedTimeTaken}</p>
            </div>
            <div className="score-container">
              <p className="your-score-text">Your Score:</p>
              <p className="score">{score}</p>
            </div>
            <button
              type="button"
              className="reattempt-button"
              onClick={goToAssessmentPage}
            >
              Reattempt
            </button>
          </>
        )
      }

      const renderTimeUpView = () => (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-assess-time-up-img.png"
            alt="time up"
            className="time-up-image"
          />
          <h1 className="time-up-heading">Time is up!</h1>
          <p className="time-up-description">
            You did not complete the assessment within the time.
          </p>
          <div className="score-container">
            <p className="your-score-text">Your Score:</p>
            <p className="score">{score}</p>
          </div>
          <button
            type="button"
            className="reattempt-button"
            onClick={goToAssessmentPage}
          >
            Reattempt
          </button>
        </>
      )

      return (
        <div className="result-card-container">
          <Header />
          <div className="result-card">
            <div className="result-card-responsive-container">
              {isTimeUp ? renderTimeUpView() : renderSubmitView()}
            </div>
          </div>
        </div>
      )
    }}
  </EvaluationContext.Consumer>
)

export default ScoreCard
