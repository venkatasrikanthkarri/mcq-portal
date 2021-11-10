import {Component} from 'react'

import './index.css'

class Select extends Component {
  componentDidMount() {
    const {
      questionDetails,
      userSelectedOptionId,
      updateAnsweredQuestions,
    } = this.props
    const {options} = questionDetails

    if (userSelectedOptionId === '') {
      updateAnsweredQuestions(options[0].id)
    }
  }

  onChangeOption = event => {
    const {updateAnsweredQuestions} = this.props
    updateAnsweredQuestions(event.target.value)
  }

  render() {
    const {questionDetails, userSelectedOptionId} = this.props
    const {options} = questionDetails

    return (
      <>
        <select
          className="options-select"
          onChange={this.onChangeOption}
          value={userSelectedOptionId}
        >
          {options.map(eachOption => (
            <option
              key={eachOption.id}
              value={eachOption.id}
              className="option"
            >
              {eachOption.text}
            </option>
          ))}
        </select>
      </>
    )
  }
}

export default Select
