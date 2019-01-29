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

    handleChange = (event, exerciseId) => {
        console.log(exerciseId)
        this.props.lesson.exercises.forEach((exercise) => {
            if(exerciseId === exercise._id) {
                this.setState({exercise: exercise})
                updatedState[event.target.name] = event.target.value
            }
        })
        const updatedState = { ...this.state.exercise }
        this.setState({ exercise: updatedState })
    }

    handleSubmit = (event, exerciseId) => {
        event.preventDefault()
        const datapass = this.state.exercise
        axios.patch(`/api/exercises/${exerciseId}`, datapass)
        .then(() => this.props.getSingleLesson)
    }

    deleteExercise = (event, exerciseId) => {
        event.preventDefault()
        console.log(exerciseId)
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
                            <div><input type="text" name="exerciseTitle" onChange={(event)=> this.handleChange(event, exercise._id)} value={exercise.exerciseTitle}></input></div>                         
                            <h6><b>Description</b></h6>  
                            <div><input type="text" name="description" onChange={(event)=> this.handleChange(event, exercise._id)} value={exercise.description}></input></div>
                            <h6><b>Equipment</b></h6>
                            <div><input type="text" name="equipment" onChange={(event)=> this.handleChange(event, exercise._id)} value={exercise.equipment}></input></div>
                            <h6><b>Spring Weight</b></h6>
                            <div><input type="number" name="springWeight" onChange={(event)=> this.handleChange(event, exercise._id)} value={exercise.springWeight}></input></div>
                            <br></br>
                            <button onClick={(event)=> this.deleteExercise(event, exercise._id)}>Delete</button>
                        </ExerciseStyle>
                    ))}        
            </ExercisesContainer>
        )
    }
}

export default Exercise  