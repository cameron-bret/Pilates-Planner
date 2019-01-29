import React, { Component } from 'react'
import axios from 'axios'
import AddLessonForm from './AddLessonForm'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OverallStyle = styled.div`
    text-align: center;
    text-decoration: none;
    color: #707070;
`

class LessonList extends Component {
    state = {
        lessons: [{}],
        addLessonFormVisible: false
    }

    componentDidMount() {
        this.getAllLessons()
    }

    getAllLessons = () => {
        axios.get(`/api/lessons`)
        .then((res) => this.setState({ lessons: res.data }))
    }

    toggleAddLessonForm = () => {
        this.setState({ addLessonFormVisible: !this.state.addLessonFormVisible })
    }

    render() {
        return (
            <OverallStyle>
                <div>
                <br></br>
                <Link to="/">
                <a href="https://imgur.com/i80rpSA"><img src="https://i.imgur.com/i80rpSA.png" alt="pilates planner header with logo image" /></a>
                </Link>
                </div>
                <h1>Lessons</h1>
                <button onClick={this.toggleAddLessonForm}>Create new Lesson</button>
                {this.state.addLessonFormVisible ? <AddLessonForm getAllLessons={this.getAllLessons} toggleAddLessonForm={this.toggleAddLessonForm}/> : null}
                {this.state.lessons.map((lesson, i) => (
                    <div key={i}>
                        <Link to={`/lessons/${lesson._id}`}><h4>{lesson.lessonTitle}</h4></Link>
                    </div>
                ))}
            </OverallStyle>
        )
    }
}

export default LessonList