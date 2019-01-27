import React, { Component } from 'react';
import axios from 'axios'

class EditLessonForm extends Component {
    state = {
        lesson: {
            username: '',
            password: ''
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.lesson.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="password"
                        value={this.state.lesson.password}
                        onChange={this.handleChange}
                        name="password"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditLessonForm;