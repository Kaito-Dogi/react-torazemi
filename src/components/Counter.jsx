import {useState} from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(prevCount => prevCount + 1);
    };
    const countDown = () => {
        setCount(prevCount => prevCount - 1);
    };

    // prevCount => prevCount + 1 は以下の省略形
    // ```
    // (prevCount) => {
    //     return prevCount + 1;
    // }
    // ```

    return (
        <div>
            <p>カウント数: {count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};

export default Counter;
