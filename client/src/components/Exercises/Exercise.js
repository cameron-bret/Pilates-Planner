import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ExerciseStyle = styled.form`
    height: 450px;
    width: 360px;
    margin: 40px;
    padding: 10px;
    border-radius: 20px;
    color: #FFFFFF;
    background-color: #63B2C9;
    display: flex;
    flex-direction: column;
    font-family: Lato;
`

const ExercisesContainer = styled.div`
    display: inline-block;
`

class Exercise extends Component {
    state = {
        exercise: {
            exerciseTitle: '',
            description: '',
            equipment: '',
            springWeight: ''
        }
    }

    handleChange = (event) => {
        const exercise = { ...this.state.exercise }
        exercise[event.target.name] = event.target.value
        this.setState({ exercise })
    }

    handleSubmit = (event, exerciseId) => {
        event.preventDefault()
        const datapass = this.state.exercise
        axios.patch(`/api/exercises/${exerciseId}`, datapass)
        .then(() => this.props.getSingleLesson)
    }

    deleteExercise = (event, exerciseId) => {
        event.preventDefault()
        axios.delete(`/api/exercises/${exerciseId}`).then(() => {
            this.props.getSingleLesson()
        })
    }

    render() {
        return (
            <ExercisesContainer>
                {this.props.lesson.exercises.map((exercise, i) => (
                        <ExerciseStyle onBlur={(event) => this.handleSubmit(event, exercise._id)} key={i}>
                            <h6><b>Title</b></h6>
                            <div><input type="text" name="exerciseTitle" placeholder= {exercise.exerciseTitle} onChange={(event)=> this.handleChange(event, exercise._id)}></input></div>                         
                            <h6><b>Description</b></h6>  
                            <div><input type="text" name="description" placeholder= {exercise.description} onChange={(event)=> this.handleChange(event, exercise._id)}></input></div>
                            <h6><b>Equipment</b></h6>
                            <div><input type="text" name="equipment" placeholder= {exercise.equipment} onChange={(event)=> this.handleChange(event, exercise._id)}></input></div>
                            <h6><b>Spring Weight</b></h6>
                            <div><input type="number" name="springWeight" placeholder= {exercise.springWeight} onChange={(event)=> this.handleChange(event, exercise._id)}></input></div>
                            <br></br>
                            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={(event)=> this.deleteExercise(event, exercise._id)}>Delete<i class="material-icons right"></i></button>
                        </ExerciseStyle>
                    ))}        
            </ExercisesContainer>
        )
    }
}

export default Exercise  