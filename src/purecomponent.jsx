// in react component must be pure 
// it means value passed to component should not change
// if value changes then component will re-render
// value can only passed as props   



let guest = 0;
function PureComponent() {
    let count=0;
  return (
    <div>
        <Cup></Cup>
        <Cup></Cup>
        <Cup></Cup>
    </div>
  );
}

const Cup = () => {
    // guest=guest + 1;   // uncomment this to make code work as impure component
    return (
        <h1> we have {guest} guest </h1>    // value increase as 2 4 6 due to impure component.
    )
}
export default PureComponent;