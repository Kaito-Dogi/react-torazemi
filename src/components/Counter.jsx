import {useState} from 'react';

const Counter = () => {
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

    // 以下の書き方は NG
    // setCount は現在の count を参照するため、値の更新が完了する前に実行すると、値の更新されないように見えることがある。
    // ```
    // setCount(count + 1)
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
