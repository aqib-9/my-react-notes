import {useState} from 'react';

function Checkboxes() {
    const [skills,setSkills] = useState([]);
    function handleCheckboxChange(e) {
        val=e.target.value;
        checked=e.target.checked;
        if (checked) {
            setSkills([...skills, val]);
        }
        else {
            setSkills(skills.filter(skill => skill !== val));
        }
    } 
    return(
        <div>
            <h1>Checkboxes</h1>
            <input type="checkbox" id="checkbox1" onChange={handleCheckboxChange} value='checkbox1'/>
            <label htmlFor="checkbox1">Checkbox 1</label>
            <br />
            <input type="checkbox" id="checkbox2" onChange={handleCheckboxChange} value='checkbox2'/>
            <label htmlFor="checkbox2">Checkbox 2</label>
            <br />
            <input type="checkbox" id="checkbox3" onChange={handleCheckboxChange} value='checkbox3'/>
            <label htmlFor="checkbox3">Checkbox 3</label>
            <br />
            <h1>Selected Skills: {skills.join(', ')}</h1>
        </div>

    )

}
export default Checkboxes;