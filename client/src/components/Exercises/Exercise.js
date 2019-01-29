import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ExerciseStyle = styled.form`
    height: 400px;
    width: 250px;
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
                            <h4>Title</h4>
                            <div><input type="text" name="exerciseTitle" onChange={(event)=> this.handleChange(event, exercise._id)} value={exercise.exerciseTitle}></input></div>                         
                            <h4>Description</h4>   
                            <div><textarea type="text" name="description" onChange={(event)=> this.handleChange(event, exercise._id)} value={exercise.description}></textarea></div>
                            <h4>Equipment</h4>
                            <div><textarea type="text" name="equipment" onChange={(event)=> this.handleChange(event, exercise._id)} value={exercise.equipment}></textarea></div>
                            <h4>Spring Weight</h4>
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