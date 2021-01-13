import React from 'react'
import './styles/Welcome.css'
// import 'bootstrap/dist/css/bootstrap.css'

function Welcome(props){
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!!</h1>
                <p>Trabajemos en tus ejercicios</p>
            </div>
        </div>
    )
}

export default Welcome