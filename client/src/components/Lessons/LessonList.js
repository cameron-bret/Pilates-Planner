import React, { Component } from 'react'
import axios from 'axios'
import AddLessonForm from './AddLessonForm'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OverallStyle = styled.div`
    text-align: center;
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
            <Link to="/">
                <h1>Pilates Planner</h1>
                </Link>
                <h1>Lessons</h1>
                <button onClick={this.toggleAddLessonForm}>Create new Lesson</button>
                {this.state.addLessonFormVisible ? <AddLessonForm getAllLessons={this.getAllLessons} toggleAddLessonForm={this.toggleAddLessonForm}/> : null}
                {this.state.lessons.map((lesson, i) => (
                    <div key={i}>
                        <Link to={`/lessons/${lesson._id}`}><h3>{lesson.muscleGroup}</h3></Link>
                    </div>
                ))}
            </OverallStyle>
        )
    }
}

export default LessonList