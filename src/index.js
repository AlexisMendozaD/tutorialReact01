// const element = document.createElement('h1');
// element.innerText = 'Hola mundo';

// const container = document.getElementById('root')

// container.appendChild(element)

import React from 'react'
import ReactDom from 'react-dom'


const user = {
  firstName: 'Alexis',
  lastName: 'Mendoza',
  Avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}
function getGreeting(user){
  if(user){
  return <h1>Hello React {getName(user)}</h1>
  }
  else{
    return <h1>Hello Stranger</h1>
  }
}

const element = (
  <div>{getGreeting()}
     <img src={user.Avatar}/>
  </div>
)

const container = document.getElementById('root');

ReactDom.render(element,container)

