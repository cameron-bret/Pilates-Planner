import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FormStyle = styled.button`
    text-align: center;
    border: none;
    background-color: #CF986F;
    padding: 5px;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    font-size: 16px;
`

class EditLessonForm extends Component {
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
        const lessonId = this.props.lessonId
        axios.patch(`/api/lessons/${lessonId}`, datapass)
        .then((res) => {
            this.props.getSingleLesson()
            this.props.toggleEditLessonForm()
        })
    }

    render() {
        return (
            <FormStyle>
                <form onSubmit={this.handleSubmit}>
                    <div><input type="text" name="lessonTitle" placeholder="Name" onChange={(event)=> this.handleChange(event)}/></div>
                    <div><input type="text" name="muscleGroup" placeholder="Muscle Group" onChange={this.handleChange} value={this.state.lesson.username}/></div>
                    <div><input type="text" name="level" placeholder="Level" onChange={this.handleChange} value={this.state.lesson.password}/></div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit<i class="material-icons right"></i></button>
                </form>
            </FormStyle>
        )
    }
}

export default EditLessonForm