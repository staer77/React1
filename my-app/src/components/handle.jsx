export function handleClick(message) {
    alert(message);
}

export function handlePlay(videoRef) {
    if (videoRef.current) {
        videoRef.current.play();
    }
}

export function handleStop(videoRef) {
    if (videoRef.current) {
        videoRef.current.pause();
    }
}