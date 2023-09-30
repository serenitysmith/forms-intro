///
import './App.css';

import "./App.css"

import React, {useState} from "react"

export default function App() {
  const [firstName, setFirstName] = React.useState("")
  


  console.log(firstName)
  function handleChange(event) {
    // console logs the jsx element targeted IE logs <input type="text" placeholder="First Name"> when we add value to it, it adds what was enteredd in the input box 
      // console.log(event.target.value)

      // this changes the state every time somehtign is entered in the input box and console logs its 

      setFirstName(event.target.value)


  }
  
  return (
      <form>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
          />
      </form>
  )
}

