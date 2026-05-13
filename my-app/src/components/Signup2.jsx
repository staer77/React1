export default function Signup2() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert("submitting")
        }}>
            <input />
            <button type="submit">Send2</button>
        </form>
    )
}