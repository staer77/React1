// import { galleryImages } from "./imgData";

// export default function Carousel() {

//     let index = 0;

//     function handleClick() {
//         index = index + 1;
//         console.log(index);
//     }

//     function handleNext() {
//     if (index === galleryImages.length - 1) {
//         setIndex(0);
//     } else {
//         setIndex(index + 1);
//         console.log(index);
//     }
// }

//     let slide = galleryImages[index];

//     return (
//         <>
//             <button onClick={handleClick}>Next</button>
//             <h2>{slide.name}
//             by {slide.artist}
//             </h2>
//             <h3>
//                 {index + 1} of {galleryImages.length}
//             </h3>
//             <img src={slide.url} alt={slide.alt} />
//             <p>{slide.description}</p>
//         </>
//     );
// }

import { useState } from "react";
import { galleryImages } from "./imgData";

export default function Carousel() {
    // 1. 일반 변수 대신 useState를 사용하여 리액트가 변경 사항을 감지
    const [index, setIndex] = useState(0);

    function handleClick() {
        // 2. 다음 인덱스로 넘어가되 마지막 이미지를 넘어가면 0번으로 돌아오도록 제어
        setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }

    let slide = galleryImages[index];

    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>
                {slide.name} by {slide.artist}
            </h2>
            <h3>
                {index + 1} of {galleryImages.length}
            </h3>
            <img src={slide.url} alt={slide.alt} />
            <p>{slide.description}</p>
        </>
    );
}