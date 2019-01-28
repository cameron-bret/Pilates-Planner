import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const OverallStyle = styled.div`
    text-align: center;
`

class HomePage extends Component {
    render() {
        return (
            <OverallStyle>
            <Link to="/">
                <h1>Pilates Planner</h1>
                </Link>
                <Link to="/lessons">
                    <button>Lessons</button>
                </Link>
                <Link to="/exercises">
                    <button>Exercises</button>
                </Link> 
            </OverallStyle>
        )
    }
}

export default HomePage