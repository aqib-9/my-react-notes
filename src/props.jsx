//both are correct         
   function Props(props) {                  
    console.log(props)
  return (
    <div>
      <h1>Props</h1>
      {
        props.name && <h1>Student name : {props.name}</h1>
      }
      
      <h1>{props.age}</h1>
      <h1>{props.className}</h1>
    </div>
  );
}
// function Props({ name, age, className }) {
//   console.log(name, age, className);
//   return (
//     <div>
//       <h1>Props</h1>
//       <h2>Name: {name}</h2>
//       <h2>Age: {age}</h2>
//       <h2>Class: {className}</h2>
//     </div>
//   );
// }

export default Props;