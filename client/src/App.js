import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import HomePage from './components/HomePage'
import LessonList from './components/Lessons/LessonList'
import SingleLesson from './components/Lessons/SingleLesson'
import styled from 'styled-components'

const BgImage = styled.div`
    background-image: url('https://i.imgur.com/ccrcH8g.png');
    height: 100%;
    background-position: center;
    background-size: cover;
`

class App extends Component {
  render() {
    return (
      <BgImage>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/lessons" component={LessonList}/>
            <Route exact path="/lessons/:lessonId" component={SingleLesson}/>
          </Switch>
        </Router>
      </BgImage>
    );
  }
}

export default App;
