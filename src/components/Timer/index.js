import './index.css'

const Timer = props => {
  const {timeLeftInSeconds} = props

  const getTimeLeftInFormat = () => {
    const hours = Math.floor(timeLeftInSeconds / 3600)
    const minutes = Math.floor((timeLeftInSeconds % 3600) / 60)
    const seconds = (timeLeftInSeconds % 3600) % 60
    const stringifiedHours = hours > 9 ? hours : `0${hours}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedHours}:${stringifiedMinutes}:${stringifiedSeconds}`
  }

  const formattedTimeLeft = getTimeLeftInFormat()

  return (
    <div className="time-left-container">
      <p className="time-left-text">Time Left</p>
      <p className="time-left">{formattedTimeLeft}</p>
    </div>
  )
}

export default Timer
