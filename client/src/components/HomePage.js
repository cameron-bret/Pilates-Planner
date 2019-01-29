import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const OverallStyle = styled.div`
    text-align: center;
`
const LinkStyle = styled.h1`
    text-decoration: none;
    font-family: "Helvetica Neue";
`

class HomePage extends Component {
    render() {
        return (
            <OverallStyle>
            <LinkStyle>
            <Link to="/">
                <h1>Pilates Planner</h1>
                </Link>
                </LinkStyle>
                <Link to="/lessons">
                <a href="https://imgur.com/pICwU5q"><img src="https://i.imgur.com/pICwU5q.png" title="source: imgur.com" /></a>
                </Link>
            </OverallStyle>
        )
    }
}

export default HomePage