import React, { Component } from 'react'
import axios from 'axios'
import UpdateLessonForm from './UpdateLessonForm'
import Exercise from '../Exercises/Exercise'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleLessonStyle = styled.div`
    text-align: center;
    font-family: Lato;
    font-size: 16px;
    color: #707070;
    text-decoration: none;
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
            this.getSingleLesson()
        })
    }

    render() {
        return (
            <SingleLessonStyle>
                <div>
                <br></br>
                <Link to="/">
                <a href="https://imgur.com/i80rpSA"><img src="https://i.imgur.com/i80rpSA.png" alt="pilates planner header with logo" /></a>
                </Link>
                </div>
                <h2>{this.state.lesson.lessonTitle}</h2>
                <h6><b>Muscle Group: </b>{this.state.lesson.muscleGroup}</h6>
                <h6><b>Level: </b>{this.state.lesson.level}</h6>
                <br></br>
                <div><button class="btn waves-effect waves-light" onClick={this.toggleEditLessonForm}>Edit Lesson<i class="material-icons right"></i></button></div>
                <hr></hr>
                {this.state.editFormVisible ? <UpdateLessonForm getSingleLesson={this.getSingleLesson} lessonId={this.state.lesson._id} toggleEditLessonForm={this.toggleEditLessonForm}/> : null}
                <hr></hr>
                <div><button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.deleteLesson}>Delete Lesson<i class="material-icons right"></i></button></div>
                <br></br>
                <div><button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.createNewExercise}>Add Exercise<i class="material-icons right"></i></button></div>
                <Exercise lesson={this.state.lesson} getSingleLesson={this.getSingleLesson}/>
            </SingleLessonStyle>
        )
    }
}

export default SingleLesson