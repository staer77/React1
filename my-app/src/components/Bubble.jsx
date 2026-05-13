import style from "./Bubble.module.css"

function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    )
}

export default function Bubble() {
    return (
        <>
            <h1 className={style.title} onClick={() => alert("네비케이션바 클릭!")}>Bubble</h1>
            <nav className={style.navbar}>
                <Button onClick={() => alert("버튼1 클릭!")}>버튼1</Button>
                <Button onClick={() => alert("버튼2 클릭!")}>버튼2</Button>
            </nav>
        </>
    )
}