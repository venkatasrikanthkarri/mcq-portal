import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Assessment from './components/Assessment'
import Home from './components/Home'
import Results from './components/Results'
import NotFound from './components/NotFound'
import EvaluationContext from './context/EvaluationContext'

import './App.css'

class App extends Component {
  state = {
    score: 0,
    timeTakenInSeconds: 0,
  }

  setScore = score => {
    this.setState({score})
  }

  setTimeTakenInSeconds = time => {
    this.setState({timeTakenInSeconds: time})
  }

  render() {
    const {score, timeTakenInSeconds} = this.state

    return (
      <EvaluationContext.Provider
        value={{
          score,
          timeTakenInSeconds,
          setScore: this.setScore,
          setTimeTakenInSeconds: this.setTimeTakenInSeconds,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/assessment" component={Assessment} />
          <ProtectedRoute exact path="/results" component={Results} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </EvaluationContext.Provider>
    )
  }
}

export default App
