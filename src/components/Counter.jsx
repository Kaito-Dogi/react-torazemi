import {useEffect, useState} from 'react';

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

    useEffect(() => {
        console.log("Current count: ", count);
    });

    // 初回レンダリングのみ実行（依存関係なし）
    // useEffect(() => {
    //     console.log("Current count: ", count);
    // }, []);

    // trigger が変更される度に実行される（trigger にのみ依存）
    // useEffect(() => {
    //     console.log("Current count: ", count);
    // }, [trigger]);

    // trigger1, trigger2 が変更される度に実行される（trigger1, trigger2 に依存）
    // useEffect(() => {
    //     console.log("Current count: ", count);
    // }, [trigger1, trigger2]);

    return (
        <div>
            <p>カウント数: {count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};

export default Counter;
