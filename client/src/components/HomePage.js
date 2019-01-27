import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Pilates Planner</h1>
                <Link to="/lessons">
                    <button>Head Image Here</button>
                </Link>
                <Link to="/lessons">
                    <button>Torso Image Here</button>
                </Link>
                <Link to="/lessons">
                    <button>Arms Image Here</button>
                </Link>
                <Link to="/lessons">
                    <button>Legs Image Here</button>
                </Link>
            </div>
        );
    }
}

export default HomePage;