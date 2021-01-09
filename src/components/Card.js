import React from 'react'
import ExerciseImg from '../images/exercise.png'

class Card extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src={ExerciseImg}/>
                </div>
                <div>
                    <h1>Guia de tecnicas</h1>
                    <p>Encuentra una seria de tecnias en esta guia</p>
                </div>
            </div>
        )
    }
}

export default Card