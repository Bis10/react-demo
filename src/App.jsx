// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form.jsx';
import View from './View.jsx';

function App() {

// const [counter, setCounter] = useState(0)
// const [persons, setPersons] = useState ([
//   {id:1, name : "Bishnu", title: "CTO", location: "Helsinki"},
//   {id:2, name : "David", title: "Designer" ,location :"Kathmandu"},
//   {id:3, name :"James", title: "Developer", location:"Sao Paulo"},
// ]);
// const [inputValue, setInputValue] = useState('')
const [formData, setFormData] = useState({});

// const changeHandler= (event)=>{
//   setInputValue(event.target.value);
// };
const changeFormHandler = (event)=>{
  const{name, value} = event.target;
  
    setFormData((prevState)=>({...prevState,[name]: value}));
    console.log(formData);

};


// const clickHandlerAdd = () =>{
//  setCounter(counter + 1);
// };
// const clickHandlerSub = () =>{
//   setCounter(counter - 1);
//  };
//  const clickHandlerReset = () =>{
//   setCounter(0);
//  };

  return (
    <>
     <Header/>
     <Form changeFormHandler = {changeFormHandler}/>
     <View {...formData}/>
     {/* <Counter 
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
    ))} */}
    <Footer/> 
    </>
   );
  };
     


export default App
