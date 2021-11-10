import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-responsive-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-assess-assessment-img.png"
          alt="assessment"
          className="assessment-image"
        />
        <div className="instructions-container">
          <h1 className="instructions-heading">Instructions </h1>
          <ol className="instructions-list">
            <li className="instruction-item">
              <span className="instruction-category">Total Questions: </span>
              10
            </li>
            <li className="instruction-item">
              <span className="instruction-category">Types of Questions: </span>
              MCQs
            </li>
            <li className="instruction-item">
              <span className="instruction-category">Duration: </span>
              10 Mins
            </li>
            <li className="instruction-item">
              <span className="instruction-category">Marking Scheme: </span>
              Every correct response, get 1 mark
            </li>
            <li className="instruction-item">
              All the progress will be lost, if you reload during the assessment
            </li>
          </ol>
          <Link to="/assessment">
            <button type="button" className="start-assessment-button">
              Start Assessment
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default Home
