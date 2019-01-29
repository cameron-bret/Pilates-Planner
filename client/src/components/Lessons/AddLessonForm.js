import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ButtonStyle = styled.button`
    text-align: center;
    border: none;
    background-color: #CF986F;
    padding: 5px;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    font-size: 16px;
`

class AddLessonForm extends Component {
    state = {
        lesson: {
            lessonTitle: '',
            muscleGroup: '',
            level: '',
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.lesson }
        newState[event.target.name] = event.target.value
        this.setState({ lesson: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const datapass = this.state.lesson
        axios.post('/api/lessons', datapass)
        .then((res) => {
            this.props.getAllLessons()
        })
    }

    render() {
        return (
            <ButtonStyle>
                <form onSubmit={(event)=> this.handleSubmit(event)}>
                    <div><input type="text" name="lessonTitle" placeholder="Name" onChange={(event)=> this.handleChange(event)}/></div>
                    <div><input type="text" name="muscleGroup" placeholder="Muscle Group" onChange={(event)=> this.handleChange(event)}/></div>
                    <div><input type="text" name="level" placeholder="Level" onChange={(event)=> this.handleChange(event)}/></div>
                    <button>Submit</button>
                </form>
            </ButtonStyle>
        )
    }
}

export default AddLessonForm