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
                <a href="https://imgur.com/pICwU5q"><img src="https://i.imgur.com/pICwU5q.png" title="source: imgur.com" /></a>
                </Link>
            </OverallStyle>
        )
    }
}

export default HomePage