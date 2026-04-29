import styles from './ButtonCom.module.css';

function handleClick() {
  alert('버튼이 클릭되었습니다!');
}

export default function ButtonCom() {
    return (
        <>
          <h2 className={styles.h2}> Title </h2>
          <nav className={styles.nav}>
            <button className={styles.button} onClick={handleClick}>
              버튼1
            </button>
            <button className={styles.button} onClick={handleClick}>
              버튼2
            </button>
          </nav>
        </>
    )
}