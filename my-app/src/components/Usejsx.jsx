export default function Usejsx() {
    const name = "react";

    function formatDate(date) {
        return new Intl.DateTimeFormat("en-US", {weekday: "long" }).format(date);
    }
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Today is {formatDate(new Date())}</p>
        </div>
    );
}