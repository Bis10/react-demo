// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box'
import { useState } from 'react'

function App() {
const [counter, setCounter] = useState(0)
const [persons, setPersons] = useState ([
  {id:1, name : "Bishnu", title: "CTO", location: "Helsinki"},
  {id:2, name : "Ram", title: "Designer" ,location :"Kathmandu"},
  {id:3, name :"Shyam", title: "Developer", location:"Sau Paulo"},
]);

const clickHandlerAdd = () =>{
 setCounter(counter + 1);
};
const clickHandlerSub = () =>{
  setCounter(counter - 1);
 };
 const clickHandlerReset = () =>{
  setCounter(0);
 };

  return (
    <>
    <p>Counter: {counter}</p>
    <button onClick = {clickHandlerAdd}>Add me </button>
    <p><button onClick = {clickHandlerSub}>Subtract me</button></p>
    <p><button onClick = {clickHandlerReset}>Reset me</button></p>

    {persons.map((person) => (
      <Box 

      key={person.id}
      name ={person.name}
      title ={person.title}
      location ={person.location}
      />
    ))}
    </>
   );
  }
     


export default App
