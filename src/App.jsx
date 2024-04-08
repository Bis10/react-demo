// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import Counter from './Counter'

function App() {
const [counter, setCounter] = useState(0)
const [persons, setPersons] = useState ([
  {id:1, name : "Bishnu", title: "CTO", location: "Helsinki"},
  {id:2, name : "David", title: "Designer" ,location :"Kathmandu"},
  {id:3, name :"James", title: "Developer", location:"Sao Paulo"},
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
     <Header/>
     <Counter 
     counterP = {counter} 
     clickHandlerAdd = {clickHandlerAdd}
     clickHandlerSub = {clickHandlerSub}
     clickHandlerReset = {clickHandlerReset}
     />
    {persons.map((person) => (
      <Box 
      key={person.id}
      name ={person.name}
      title ={person.title}
      location ={person.location}
      />
    ))}
    <Footer/>
    </>
   );
  }
     


export default App
