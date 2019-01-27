import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LessonList from './components/Lessons/LessonList';
import SingleLesson from './components/Lessons/SingleLesson';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/lessons" component={LessonList}/>
            <Route exact path="/lessons/:lessonId" component={SingleLesson}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
