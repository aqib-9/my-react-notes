function PassFunctionAsProps({handleClick,name}) {
  return (
    <div>
      <button onClick={()=>handleClick(name)}>button 1</button>
        <button>button 2</button>
    </div>
  );
}

export default PassFunctionAsProps;