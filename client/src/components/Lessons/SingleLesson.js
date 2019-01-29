import React, { Component } from 'react'
import axios from 'axios'
import EditLessonForm from './EditLessonForm'
import Exercise from '../Exercises/Exercise'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OverallStyle = styled.div`
    text-align: center;
    font-family: Lato;
    font-size: 16px;
    color: #707070;
`

class SingleLesson extends Component {
        state = {
        lesson: {
            lessonTitle: '',
            muscleGroup: '',
            level: '',
            exercises: [{}]
        }, 
        exercise: {
            exerciseTitle: '',
            description: '',
            equipment: '',
            springWeight: '',
        },
        editFormVisible: false
    }

    componentDidMount() {
        this.getSingleLesson()
    }

    getSingleLesson = () => {
        const lessonId = this.props.match.params.lessonId
        axios.get(`/api/lessons/${lessonId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ lesson: res.data })
            })
    }

    toggleEditLessonForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    deleteLesson = () => {
        const lessonId = this.props.match.params.lessonId
        axios.delete(`/api/lessons/${lessonId}`)
            .then(() => this.props.history.goBack())
    }

    createNewExercise = () => {
        const lessonId = this.props.match.params.lessonId
        axios.post(`/api/lessons/${lessonId}/exercises`, this.state.exercise).then((res) => {
            console.log(res.data)
            this.getSingleLesson()
        })
    }

    render() {
        return (
            <OverallStyle>
                <div>
                <br></br>
                <Link to="/">
                <a href="https://imgur.com/i80rpSA"><img src="https://i.imgur.com/i80rpSA.png" alt="pilates planner header with logo" /></a>
                </Link>
                </div>
                <h2>{this.state.lesson.lessonTitle}</h2>
                <h6><b>Muscle Group: </b>{this.state.lesson.muscleGroup}</h6>
                <h6><b>Level: </b>{this.state.lesson.level}</h6>
                <div><button onClick={this.toggleEditLessonForm}>Edit Lesson</button></div>
                {this.state.editFormVisible ? <EditLessonForm getSingleLesson={this.getSingleLesson} lessonId={this.state.lesson._id} toggleEditLessonForm={this.toggleEditLessonForm}/> : null}
                <div><button onClick={this.deleteLesson}>Delete Lesson</button></div>
                <div><button onClick={this.createNewExercise}>Add Exercise</button></div>
                <Exercise lesson={this.state.lesson} getSingleLesson={this.getSingleLesson}/>
            </OverallStyle>
        )
    }
}

export default SingleLesson