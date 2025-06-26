import  { Fragment } from 'react';
function Fragment2(){
    return (
        <Fragment>
            
            <h2>Using Fragment</h2>
        </Fragment>
    )
}


// if we use div instead of Fragment, it will create an extra div in the DOM
// each time Fragement2 is called, it will create a new div
// so we use Fragment to avoid this extra div
// Fragment tags can also be used as empty tags, like <></>
function Fragment(){
    return (
        <> 
            <Fragment2></Fragment2>
            <Fragment2></Fragment2> 
            <Fragment2></Fragment2> 
            <Fragment2></Fragment2>
        </>
    )
}

