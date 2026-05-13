export default function Signup1() {
    return (
        <form onSubmit={() => alert("Submitting")}>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button type="submit">회원가입</button>
        </form>
    )
}