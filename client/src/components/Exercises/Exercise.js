import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ExerciseStyle = styled.form`
    height: 400px;
    width: 400px;
    background-color: #888888;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        background-color: #796388;
    }

    textarea {
        background-color: #999911;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Exercise extends Component {
    state = {
        exercise: {
            title: '',
            description: '',
            equipment: '',
            springWeight: ''
        }
    }

    handleChange = (event, exerciseId) => {
        console.log(exerciseId)
        this.props.lesson.exercises.forEach((exercise) => {
            if(exerciseId === exercise._id) {
                // this.setState({exercise: exercise})
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
            <FlexContainer>
                {this.props.lesson.exercises.map((exercise, i) => (
                        <ExerciseStyle onBlur={(event) => this.handleSubmit(event, exercise._id)} key={i}>
                            <button onClick={(event)=> this.deleteExercise(event, exercise._id)}>x</button>
                            <div><input onChange={(event)=> this.handleChange(event, exercise._id)} type="text" name="title" value={exercise.title}></input></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, exercise._id)} type="text" name="description" value={exercise.description}></textarea></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, exercise._id)} type="text" name="equipment" value={exercise.equipment}></textarea></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, exercise._id)} type="text" name="springWeight" value={exercise.springWeight}></textarea></div>
                        </ExerciseStyle>
                    ))}        
            </FlexContainer>
        );
    }
}

export default Exercise;        