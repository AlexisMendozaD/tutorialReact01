import React from 'react'
import ExerciseImg from '../images/exercise.png'
import CirclesImg from '../images/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

class Card extends React.Component{
    render(){
        return (
           <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${CirclesImg}), linear-gradient(to right, #A74CF2, #617BFB)`
                }}
           >
               <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={ExerciseImg} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Guia de tecnicas</h1>
                            <p>Encuentra una seria de tecnias en esta guia</p>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Card