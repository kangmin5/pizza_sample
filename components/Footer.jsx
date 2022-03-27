import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout='fill'/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. 장안의 화제인 이 곳의 피자가 최고다.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>위치</h1>
          <p className={styles.text}>
            서울시 중구 다동 1299
            <br/> 서울시, 49492
            <br/> (02) 777-5544
          </p>

          <p className={styles.text}>
            Paris d9939
            <br/> Paris, 49492
            <br/> (02) 777-5544
          </p>
          <p className={styles.text}>
            New York 494200
            <br/> New York, 49492
            <br/> (02) 777-5544
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>영업 시간</h1>
          <p className={styles.text}>
            월 ~ 금
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            토 ~ 일
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}
