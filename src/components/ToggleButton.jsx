import {useEffect, useState} from 'react';

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggle = () => {
        setIsChecked(prevIsChecked => !prevIsChecked);
    };

    useEffect(() => {
        console.log('Current isChecked: ', isChecked);
        if (isChecked) {
            console.log('Subscribe database...');
        };

        // クリーンアップ関数
        return () => {
            console.log('Unsubscribe database!');
        };
    });

    return (
        <button onClick={toggle}>
            {isChecked ? 'OFF' : 'ON'}
        </button>
    )
}

export default ToggleButton;
