// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// const SingleExerciseStyle = styled.div`
//     text-align: center;
//     font-family: Lato;
//     font-size: 16px;
//     color: #707070;
//     text-decoration: none;
// `

// class SingleExercise extends Component {
//         state = {
//         exercise: {
//             exerciseTitle: '',
//             description: '',
//             equipment: '',
//             springWeight: '',
//         },
//     }

//     componentDidMount() {
//         this.getSingleExercise()
//     }

//     getSingleExercise = () => {
//         const exerciseId = this.props.match.params.exerciseId
//         axios.get(`/api/exercises/${exerciseId}`)
//             .then((res) => {
//                 this.setState({ exercise: res.data })
//             })
//     }

//     render() {
//         return (
//             <SingleExerciseStyle>
//                 <div>
//                 <br></br>
//                 <Link to="/">
//                 <a href="https://imgur.com/i80rpSA"><img src="https://i.imgur.com/i80rpSA.png" alt="pilates planner header with logo" /></a>
//                 </Link>
//                 </div>
//                 <h2>{this.state.exercise.exerciseTitle}</h2>
//             </SingleExerciseStyle>
//         )
//     }
// }

// export default SingleExercise