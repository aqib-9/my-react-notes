import { useState } from "react";

function Inline(){

    // inline style in react is differnet from normal html
    // in react we use camelCase for css properties and values are in string format
    // for example: background-color in css becomes backgroundColor in react
    // and we use double curly braces for inline styles in react
    // for example: style={{ backgroundColor: 'red' }}
    // we can also pass objects to style in react.
    const [current_style,change_style] = useState(
        { fontSize: '20px', color: 'green' }
    )
    const [col,changecol] = useState(true)
    return (
        <div>
            <h1>Inline CSS</h1>
            <div>
                <h2 style={{ color: 'blue', backgroundColor: 'lightgray', padding: '10px' }}>
                    This is an inline styled heading
                </h2>
                <p style={{ ...current_style, color: col ? "green" : "yellow" }}>
                    This paragraph has inline styles applied to it.
                </p>

                <button onClick={()=>changecol(!col)}  style={{ padding: '10px 20px',  backgroundColor: 'orange', border: 'none', borderRadius: '5px' }}>
                    Click Me
                </button>
            </div>
        </div>
    )
}

export default Inline;