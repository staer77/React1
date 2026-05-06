import { useRef } from "react";
import { handlePlay, handleStop } from "./handle";
// import ButtonCom from "./ButtonCom"; // 당장 사용하지 않는다면 주석 처리하여 메모리 절약
import sampleVideo from "../assets/sample-video.mp4";

export function Button({ message, onClick, children }) {
    function handleAction() {
    if (onClick) {
        onClick();
    } else if (message) {
        alert(message);
    }
    
    }

    return (
        <button onClick={handleAction}>
            {children}
        </button>
    );
}

export default function Toobar() {
// video 요소를 참조하기 위한 ref 생성
const videoRef = useRef(null);

return (
    <>
        <h1>Toolbar</h1>
        
        
        <video ref={videoRef} src={sampleVideo} width="400" />
        
        <nav>
            
            <Button onClick={() => handlePlay(videoRef)}>재생</Button>
            <Button onClick={() => handleStop(videoRef)}>정지</Button>
        </nav>
        
        <Button message="버튼1 클릭">버튼1</Button>
        <Button message="버튼2 클릭">버튼2</Button>
    </>
);
}