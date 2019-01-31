import React, { Component } from 'react'
import axios from 'axios'
import CreateLesson from './CreateLesson'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LessonListStyle = styled.div`
    text-align: center;
    text-decoration: none;
    color: #707070;
    height: 100vh;
`

class LessonList extends Component {
    state = {
        lessons: [{}],
        createLessonVisible: false
    }

    componentDidMount() {
        this.getAllLessons()
    }

    getAllLessons = () => {
        axios.get(`/api/lessons`)
        .then((res) => this.setState({ lessons: res.data }))
    }

    toggleCreateLesson = () => {
        this.setState({ createLessonVisible: !this.state.createLessonVisible })
    }

    render() {
        return (
            <LessonListStyle>
                <div>
                <br></br>
                <Link to="/">
                <a href="https://imgur.com/i80rpSA"><img src="https://i.imgur.com/i80rpSA.png" alt="pilates planner header with logo" /></a>
                </Link>
                </div>
                <h2>Lessons</h2>
                <button class="btn waves-effect waves-light" onClick={this.toggleCreateLesson}>Create New Lesson<i class="material-icons right"></i></button>
                <hr></hr>
                {this.state.createLessonVisible ? <CreateLesson getAllLessons={this.getAllLessons} toggleCreateLesson={this.toggleCreateLesson}/> : null}
                <hr></hr>
                {this.state.lessons.map((lesson, i) => (
                    <div key={i}>
                        <Link to={`/lessons/${lesson._id}`}><h5>{lesson.lessonTitle}</h5></Link>
                    </div>
                ))}
            </LessonListStyle>
        )
    }
}

export default LessonList