import style from "./Bubble.module.css";

export default function Bubble() {
    return (
        <>
            <h1 className={style.title} onClick={() => alert("네비케이션바 클릭!")}>Bubble</h1>
            <div className={style.navbar}>
                <button className={style.button} onClick={() => alert("버튼1 클릭!")}>버튼1</button>
                <button className={style.button} onClick={() => alert("버튼2 클릭!")}>버튼2</button>
            </div>
        </>
    )
}