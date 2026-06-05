import {useState} from 'react';

export default function BtnClick() {
    const [number, setNumber] = useState(0);

    function handleIncrement3() {
        setNumber(number => number + 1);
        console.log(number);
        setNumber(number + 1);
        console.log(number);
        setNumber(number + 1);
        console.log(number);
    }

    function handleIncrement5() {
        setNumber(number + 5);
        alert(number);
    }

    function handleTimer() {
        setNumber(number + 5);
        setTimeout(() => {
            alert(number);
        }, 1000);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleIncrement3} >+3</button> &nbsp;
            <button onClick={handleIncrement5}>+5</button> &nbsp;
            <button onClick={handleTimer}>Timer</button>
        </div>
    );
}

// Queue: 1. handleIncrement3 -> setNumber(number + 1) -> number = 0 -> number = 1