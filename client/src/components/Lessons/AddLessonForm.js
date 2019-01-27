import React, { Component } from 'react'
import axios from 'axios'

class AddLessonForm extends Component {
    state = {
        muscleGroup: '',
        level: '',
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
            this.props.toggleAddLessonForm()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div><input type="text" name="muscleGroup" placeholder="Muscle Group" onChange={this.handleChange} value={this.state.lesson.muscleGroup}/></div>
                    <div><input type="text" name="password" placeholder="Level" onChange={this.handleChange} value={this.state.lesson.level}/></div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddLessonForm