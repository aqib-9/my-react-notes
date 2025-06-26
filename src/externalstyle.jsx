import style from './externalcss.module.css';
//import './externalcss.module.css';  --> this is wrong


function Externalstyle(){
    return (
        <div>
            <h1 className={style.heading}>External Style in externalstyle.jsx file</h1>
            <p className={style.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolor accusantium officia ad. Tenetur quo laborum odio. Mollitia vero numquam modi, illo, optio, laborum libero itaque voluptatum fugiat aspernatur architecto?</p>
        </div>
    )
}


// This is wrong too as class name must pass like above otherwise styling will applied not only to this page but also on app.jsx too

// function Externalstyle(){
//     return (
//         <div>
//             <h1 className='heading'>External Style in externalstyle.jsx file</h1>
//             <p className='p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste dolor accusantium officia ad. Tenetur quo laborum odio. Mollitia vero numquam modi, illo, optio, laborum libero itaque voluptatum fugiat aspernatur architecto?</p>
//         </div>
//     )
// }

export default Externalstyle;