export default function Calc({ operands, operations }) {
    let result = 0;
    let title = "";

    switch (operations) { 
        case '+':
            result = operands[0] + operands[1];
            title = "덧셈";
            break;
        case '-':
            result = operands[0] - operands[1];
            title = "뺄셈";
            break;
        case '*':
            result = operands[0] * operands[1];
            title = "곱셈";
            break;
        case '/':
            result = operands[0] / operands[1];
            title = "나눗셈";
            break;
        default:
            alert("지원하지 않는 연산입니다.");
    }

    return (
        <div>
            <h1>{title}의 결과입니다</h1>
            <p>{operands[0]} {operations} {operands[1]} = {result}</p>
        </div>
    );
}