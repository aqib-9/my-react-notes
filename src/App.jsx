import { useState } from 'react'
import { useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createElement } from 'react'
import Fruit, { Vegetable } from './user'
import Counter from './state'
import HideShow from './hideshow'
import Props from './props'
import Props2 from './props2'
import InputField from './inputfield'
import ControlledComponent from './controlledComponent'
import Checkboxes from './checkboxes'
import Loops from './loops'
import Clock from './clock'
import NestedLoops from './nestedLoops'
import Use_effect from './useeffect'
import Inline from './inlinestyle'
import Externalstyle from './externalstyle'
import StyleComponent from './StyledComponent'
import Boot_strap from './bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import UseRef from './useref'
import UncontrolledComponent from './uncontrolledComponent'
import PassFunctionAsProps from './passingfunctionasprops'
import Forwardref from './forwardref'
import UseFormStatus from './useformstatus';
import Transition from './useTransition';
import PureComponent from './purecomponent';
import DerivedState from './derivestate';
import Lift_1 from './liftingupstate_part1';
import Lift_2 from './liftingupstate_part2';
import UpdateObject from './updatingObjectinState';
import UpdateArray from './UpdatingArrayinState';
import UseActionStateHook from './useActionStateHook';
import Use_IdHook from './useId';
import UseToggle from './Customhooks';
import University from './ContextApiExample/University';
import React_Router from './reactRouter';
import ReactExample from './ReactRouterExample/ReactRouterEx';
import Api_example from './api';
import Json_server from './json-server';
import Json_server2 from './json-server2';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router';
import Simple_validation from './SimpleValidation';
import UseActionValidation from './ValidationUsingUseActionState';
import UseReducerExample from './useReducer';

//use jsx to render component on webpages

// function App() {
//   function alertt(){
//     alert('heyy')
//   }
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h1>aqib</h1>
//       <Fruit />
//       <Vegetable/>
//       <button onClick={alertt}>hh</button>
//     </div>
//   )
// }

//use direct react without jsx
// function App() {
//   return (
//     createElement('h1',{id:'rootDiv'},'hello')
//   )
// }



//different ways to use jsx
// function App() {
//   function sum(a,b){
//     return a+b;
//   }
//   return (
//     <h1>{sum(10,19)}</h1>
    
//   )
// }


//using button just define function dont call function as onClick of react automatically call it
// function App() {
//   function sum(a,b){
//     alert(a+b);
//   }
//   function al(){
//     alert('called')
//   }
//   return (
//     <div>
//     <button onClick={al}>press1</button>
//     <button onClick={()=>sum(10,15)}>press2</button>
//     </div>
//   )
// }





//variable rerender problem in react
// function App(){
//   var fruit='banana';
//   function change(k){
//     var fruit = k;
//     console.log(k)   // don't change fruit name as react dont't rerender variables on ui if they change on run time so we have to use state.
//   }
//   return(
//     <div>
//       <h1>State in react</h1>
//       <h1>{fruit}</h1>
//       <button onClick={()=>change('apple')}>change</button> 

//     </div>
//   )
// }

//state in react 
// function App(){
//   return(
//     <div>
//       <Counter>

//       </Counter>

//     </div>
//   )
// }


// hide and show tags/component in react
// function App(){
//   return(
//     <div>
//       <HideShow>

//       </HideShow>

//     </div>
//   )
// }


// props in react Props (short for properties) are a way to pass data from one component to another — typically from a parent to a child.
//Think of props like function arguments but for components.

// function App(){ 
//   const name1='aqib';
//   const age1='10';
//   const className1='CS';
//   const name2='harru';
//   const age2='20';
//   const className2='CSE';


//   const [student,setStudent] = useState('')  //if name is enter nothing will display

//   //we can directly use and object to pass all these variables at once
//   //here we also use a button to toggle if student name is passed then show element otherwise hide it
//   return(
//     <div>
      
//       <Props name={name1} age={age1} className={className1}>

//       </Props>
//       <hr />
//       <button onClick={() => setStudent(student === 'sam' ? '' : 'sam')}>Show bottom detail</button> 
//       <hr />
//       <Props name={student} age={age2} className={className2}>

//       </Props>

//     </div>
//   )
// }
// function App(){ //passing jsx as props
//   // here whole html code inside Props2 component is passed as props to Props2 component
//   return(
//     <div>
//     <Props2>
//       <h1>Props 2</h1>
//       <h2>aqib</h2>
//     </Props2>
//     <Props2>
//       <h1>Props 2</h1>
//       <h2>sam</h2>
//     </Props2>
//     <Props2>
//       <h1>Props 2</h1>
//       <h2>berry</h2>
//     </Props2>
//     </div>
//   );
// }




// Input field in react
// function App(){
//   return (
//     <div>
//       <InputField>
//       </InputField>
//     </div>
//   )
// }



// controlledcomponents in react
// function App() {
//   return (
//     <ControlledComponent>
//     </ControlledComponent>
//   );
// }




//checkboxes
// function App() {
//   return(
//     <Checkboxes>
//     </Checkboxes>
//   )
// }




//Loops
// function App(){
//   return(
//     <Loops>

//     </Loops>
//   )
// }



//Clock in react
// function App(){
//   const [color, setColor] = useState("black");
//   return(
//     <div>
//       <h1>Current Time</h1>
//             <select value={color} onChange={e => setColor(e.target.value)}>
//                 <option value="black">Black</option>
//                 <option value="red">Red</option>
//                 <option value="blue">Blue</option>
//                 <option value="green">Green</option>
//                 <option value="orange">Orange</option>
//             </select>
//       <Clock color={color}>
//       </Clock>
//     </div>
//   )
// }




// nested loops in react
// function App() {
//   const college = [
//     {
//       name: 'Delhi University',
//       students: [
//         { name: 'Aqib', age: 20, city: 'Delhi' },
//         { name: 'Sam', age: 22, city: 'Gurgaon' }
//       ]
//     },
//     {
//       name: 'Mumbai University',
//       students: [
//         { name: 'Berry', age: 21, city: 'Mumbai' },
//         { name: 'Ali', age: 23, city: 'Noida' }
//       ]
//     },
//     {
//       name: 'Pune University',
//       students: [
//         { name: 'Ahmed', age: 24, city: 'Pune' },
//         { name: 'Zara', age: 25, city: 'Bangalore' }
//       ]
//     }
//   ];
//   return (
//     <div>
//       {college.map((collegeObj, idx) => (
//         <NestedLoops key={idx} college={collegeObj} />
//       ))}
//     </div>
//   );
// }






// use effect in react
// The useEffect hook in React lets you perform side effects in your functional components.
// function App() {
//   return (
//     <Use_effect></Use_effect>
//   )
// }




//Inline CSS in React
// function App(){
//   return (
//     <Inline>

//     </Inline>
//   )
// }





// External style in jsx and its problem
// function App(){
//   return(
//     <div>
//     <Externalstyle>

//     </Externalstyle>
//     <h1 className='heading'>external style in app.jsx file</h1>
//     <p>as we can see style import only on externalstyle.jsx file but applies to app.jsx file also we have to fic it by importing styling as variable in externalstyle.jsx file that is a target component</p>
//     </div>
//   )
// }




//Style component in react
// function App() {
//   return (
//     <div>
//       <StyleComponent>

//       </StyleComponent>
//       </div>
//   );
// }



// function App(){
//   return(
//     <Boot_strap></Boot_strap>
//   )
// }

// function App(){
//   return(
//     <UseRef></UseRef>
//   )
// }

//
// function App(){
//   return(
//     <UncontrolledComponent></UncontrolledComponent>
//   )
// }


// function App(){
//   // passing function as props to child component
//   // this is useful when we want to pass a function from parent to child component
//   // so that child component can call that function and pass data back to parent component
//   const handleClick = (data) => {
//     alert(`Data from child: ${data}`);
//   };
//   const name = 'Aqib';
//   return(
//     <PassFunctionAsProps handleClick={handleClick} name={name}></PassFunctionAsProps>
//   )
// }


// Forwarding refs in React
// Forwarding refs allows you to pass a ref through a component to one of its children.
// function App() {
//   const inputRef = useRef(null);

//   const handleinputref = () => {
//     inputRef.current.focus();
//     inputRef.current.value = "Hello from Forward Ref";
//     inputRef.current.style.backgroundColor = "lightblue";
//     inputRef.current.style.color = "red";
//   }



//   return (
//     <div>
//     <h1>Forward ref</h1>

//     <Forwardref ref={inputRef} handleref={handleinputref} />
//     {/* <button onClick={handleinputref}>Submit</button> */}
//     </div>

//   )
// }


//use form status
// import { useFormStatus } from 'react-dom';
// function App(){
//   const handleSubmit = async()=>{
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a network request
//     console.log('Form submitted'); 
//   }

//   function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <button type="submit" disabled={pending}>
//       {pending ? 'Submitting...' : 'Submit'}
//     </button>
//   );
// }
//   return(
//     <div>
//       <form action={handleSubmit}>
//         <input type="text" name="username" placeholder="Enter your username" />
//         <br /><br></br>
//         <input type="password" name="password" placeholder="Enter your password" />
//         <br /><br></br>
//         <SubmitButton />

//       </form>
//     </div>
//   )
// };


// we can also do this without using useFormStatus by using useState only
// function App() {
//   const [pending, setPending] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setPending(true);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     alert('Form submitted successfully!');
//     setPending(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="username" placeholder="Enter your username" />
//       <br /><br />
//       <input type="password" name="password" placeholder="Enter your password" />
//       <br /><br />
//       <button type="submit" disabled={pending}>
//         {pending ? 'Submitting...' : 'Submit'}
//       </button>
//     </form>
//   );
// }




// useTransition in React
// function App() {
//   return(
//     <Transition></Transition>
//   )
// }


// Pure Component in React
// function App(){
//   return (
//     <PureComponent></PureComponent>
//   )

// }




//Derive state from props
// function App() {
//   return(
//     <DerivedState></DerivedState>
//   )
// }




//Lisfting Up state in React
// in this example we will lift up the state from child component to parent component
// function App() {
//   const [user, setUser] = useState('');
//   return (
//     <div>
//       <Lift_1 setUser={setUser}></Lift_1>
//       <Lift_2 user={user}></Lift_2>
//     </div>
//   )
// }


//Updating Objects in State
// function App(){
//   return(
//     <UpdateObject></UpdateObject>
//   )
// }



// Updating Array in State
// function App(){
//   return(
//     <UpdateArray></UpdateArray>
//   )
// }




//Use Action State Hook
// function App() {
//   return (
//     <UseActionStateHook></UseActionStateHook>
//   );
// }




//Use Id Hook
// function App(){
//   return(
//     <Use_IdHook></Use_IdHook>
//   )
// }




//Custom Hook in React
// function App() {

//   const [value,toggleValue] = UseToggle(true);
//   return (
//     <div >
//       <button onClick={toggleValue}>Toggle Value</button>
//       <h1>{value ? 'Value is true' : 'Value is false'}</h1>
//     </div>
//   );
// }


// function App() {
//     return (
//         <div>
//             <University></University>
//         </div>
//     );
// }





// function App() {
//     return (
//         <div>
//             <React_Router></React_Router>
//         </div>
//     );
// }





// import { BrowserRouter } from "react-router";

// function App() {
//     return (
//       <BrowserRouter>
//       <ReactExample></ReactExample>
//       </BrowserRouter>
      
        
            
      
//     );
// }


// function App(){
//   return(
//     <Api_example></Api_example>
//   )
// }


// import Json_server from './json-server';
// import Json_server2 from './json-server2';
// import Json_server3 from './json-server3';
// function App() {
//   return (
//     <BrowserRouter>
//       {/* Simple navigation links */}
//       <NavLink to="/">Home</NavLink> |
//       <NavLink to="/add">Add</NavLink>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Json_server />} />
//         <Route path="/add" element={<Json_server2 />} />
//         <Route path="/edit/:id" element={<Json_server3 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }





//Simple Validation in React.js
// function App(){
//   return(
//     <Simple_validation></Simple_validation>
//   )
// }





//Validation Using UseActionState Hook
// function App(){
//   return(
//     <UseActionValidation></UseActionValidation>
//   )
// }




//UseReducer example in react.js
// function App(){
//   return(
//     <UseReducerExample></UseReducerExample>
//   )
// }







//Lazy Loading in Raect.js
// import React, { lazy, Suspense } from 'react';
// const User = lazy(() => import('./LazyLoading'));



// function App(){

//   const[load,setLoad] = useState(false)
//   return(
//     <div>
//       {load ? (
//         <Suspense fallback={<h3>Loading</h3>}>
//           <User />
//         </Suspense>
//       ) : null}
//       <button onClick={() => setLoad(l => !l)}>
//         {load ? "Hide" : "Load"}
//       </button>
//       </div>
    
//   )
// }



export default App;


