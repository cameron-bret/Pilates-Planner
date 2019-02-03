import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ExerciseListStyle = styled.div`
    text-align: center;
    text-decoration: none;
    color: #707070;
    height: 100vh;
`

class ExerciseList extends Component {
    state = {
        exercises: [{}],
    }

    componentDidMount() {
        this.getAllExercises()
    }

    getAllExercises = () => {
        axios.get(`/api/exercises`)
        .then((res) => this.setState({ exercises: res.data }))
    }


    render() {
        return (
            <ExerciseListStyle>
                <div>
                <br></br>
                <Link to="/">
                <a href="https://imgur.com/i80rpSA"><img src="https://i.imgur.com/i80rpSA.png" alt="pilates planner header with logo" /></a>
                </Link>
                </div>
                <h2>Exercises</h2>
                {this.state.exercises.map((exercise, i) => (
                    <div key={i}>
                        <Link to={`/exercises/${exercise._id}`}><h5>{exercise.exerciseTitle}</h5></Link>
                    </div>
                ))}
            </ExerciseListStyle>
        )
    }
}

export default ExerciseList