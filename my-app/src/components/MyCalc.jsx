import Calc from './Calc';

export default function MyCalc() {
    const operands = [5, 10];
    const operations = ['+'];

    return (
        <div>
            <h1>나만의 계산기{MyCalc}</h1>
            <Calc operands={operands} operations={operations} />
        </div>
    )
}