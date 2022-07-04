import {useState} from 'react';

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggle = () => {
        setIsChecked(prevIsChecked => !prevIsChecked);
    };

    return (
        <button onClick={toggle}>
            {isChecked ? 'OFF' : 'ON'}
        </button>
    )
}

export default ToggleButton;
