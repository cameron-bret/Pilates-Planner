import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const PostIt = styled.form`
    height: 200px;
    width: 200px;
    background-color: beige;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        background-color: beige;
    }

    textarea {
        background-color: beige;
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
            description: ''
        }
    }

    handleChange = (event, exerciseId) => {
        console.log(exerciseId)
        this.props.user.exercises.forEach((exercise) => {
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
        .then(() => this.props.getSingleUser)
    }

    deleteExercise = (event, exerciseId) => {
        event.preventDefault()
        console.log(exerciseId)
        axios.delete(`/api/exercises/${exerciseId}`).then(() => {
            this.props.getSingleUser()
        })
    }

    render() {
        return (
            <FlexContainer>
                {this.props.user.exercises.map((exercise, i) => (
                        <PostIt onBlur={(event) => this.handleSubmit(event, exercise._id)} key={i}>
                            <button onClick={(event)=> this.deleteExercise(event, exercise._id)}>x</button>
                            <div><input onChange={(event)=> this.handleChange(event, exercise._id)} type="text" name="title" value={exercise.title}></input></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, exercise._id)} type="text" name="description" value={exercise.description}></textarea></div>
                        </PostIt>
                    ))}        
            </FlexContainer>
        );
    }
}

export default Exercise;        