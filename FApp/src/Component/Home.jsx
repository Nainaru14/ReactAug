// Homeclass.js
import React from 'react'
import Contact from './Contact'

export default function Home(props) {
  // name = "Divya"
  return (
    <div>
      <h1>Hello {props.name} 
        Age is {props.age}</h1>
      <Contact
      name={props.name} />
    </div>
  )
}