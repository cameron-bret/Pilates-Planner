import React, { Component } from 'react'
import axios from 'axios'
import EditLessonForm from './EditLessonForm'
import Exercise from '../Exercises/Exercise'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OverallStyle = styled.div`
    text-align: center;
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

    deleteLesson = () => {
        const lessonId = this.props.match.params.lessonId
        axios.delete(`/api/lessons/${lessonId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEditLessonForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
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
            <Link to="/">
                <h1>Pilates Planner</h1>
                </Link>
                <h2>{this.state.lesson.lessonTitle}'s Exercises</h2>
                <h4>Muscle Group: {this.state.lesson.muscleGroup}</h4>
                <h4>Level: {this.state.lesson.level}</h4>
                <div><button onClick={this.createNewExercise}>Add Exercise</button></div>
                <div><button onClick={this.toggleEditLessonForm}>Edit Lesson</button></div>
                {this.state.editFormVisible ? <EditLessonForm getSingleLesson={this.getSingleLesson} lessonId={this.state.lesson._id} toggleEditLessonForm={this.toggleEditLessonForm}/> : null}
                <div><button onClick={this.deleteLesson}>Delete Lesson</button></div>
                <Exercise lesson={this.state.lesson} getSingleLesson={this.getSingleLesson}/>
            </OverallStyle>
        )
    }
}

export default SingleLesson