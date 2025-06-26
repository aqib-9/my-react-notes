import { useState } from "react";

const UseToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(val) {
        if (typeof val === "boolean") {
            setValue(val);
        } else {
            setValue(v => !v);
        }
    }

    return [value, toggleValue];
}

export default UseToggle;