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

// import style from "./Carousel.module.css";
// import { useState } from "react";
// import { galleryImages } from "./imgData";

// export default function Carousel() {
//     // 1. 일반 변수 대신 useState를 사용하여 리액트가 변경 사항을 감지
//     const [index, setIndex] = useState(0);

//     function handleClick() {
//         // 2. 다음 인덱스로 넘어가되 마지막 이미지를 넘어가면 0번으로 돌아오도록 제어
//         setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
//     }

//     function handlePrevious() {
//         setIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1); 
//     }

//     let slide = galleryImages[index];

//     return (
//         <section className={style.wrapper}>
//             <h2>
//                 {slide.name} by {slide.artist}
//             </h2>
//             <h3>
//                 {index + 1} of {galleryImages.length}
//             </h3>
//             <img src={slide.url} alt={slide.alt} />
//             <p className={style.button}>
//                 <button onClick={handleClick} className={style.next}>
//                     Next
//                 </button>
//                 <button onClick={handlePrevious} className={style.prev}>
//                     Previous
//                 </button>
//             </p>
//             <p>{slide.description}</p>
//         </section>
//     );
// }

import style from "./Carousel.module.css";
import { useState } from "react";
import { galleryImages } from "./imgData";

export default function Carousel() {
    const [more, setMore] = useState(true);
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }

    function handlePrevious() {
        setIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1); 
    }

    function handleMoreClick() {
        setMore(!more);
    }

    let slide = galleryImages[index];

    return (
        <section className={style.wrapper}>
            <div className={style.headerArea}>
                <h2>{slide.name} by {slide.artist}</h2>
                <h3>{index + 1} of {galleryImages.length}</h3>
            </div>

            <div className={style.sliderContainer}>
                {/* 사진 프레임 */}
                <div className={style.imageFrame}>
                    <img src={slide.url} alt={slide.alt} />
                </div>
                
                <div className={style.buttonGroup}>
                    <button onClick={handlePrevious} className={`${style.button} ${style.prev}`}>
                        Previous
                    </button>
                    <button onClick={handleClick} className={`${style.button} ${style.next}`}>
                        Next
                    </button>
                </div>
            </div>

            <div className={style.footerArea}>
                <button onClick={handleMoreClick} className={style.toggleBtn}>
                    {more ? "Hide" : "Show"} description
                </button>
                {more && <p className={style.description}>{slide.description}</p>}
            </div>
        </section>
    );
}