import {useState} from 'react'

const TextInput = (props) => {
    const [text, setText] = useState('');
    const handleText = (event) => {
        setText(event.target.value);
    };

    console.log(text);

    return (
        <input
            onChange={(event) => handleText(event)}
            type={'text'}
            value={text}
        />
    );
};

export default TextInput;
