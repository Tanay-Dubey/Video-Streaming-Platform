import Image from 'next/image'
import mypic from './/1.png'
import styles from ".//Video.module.css";
import profile from ".//2.png"

export default function Video() {
  return (
    <div className={styles.singlevideo}>
      <Image
        src={mypic}
        alt="img"
        className={styles.template}
      />
      <div className={styles.bottom}>
        <div className={styles.l}>
          <Image
            src={profile}
            alt="img"
            className={styles.profile}
          />
        </div>
        <div className={styles.r}>
          <div className={styles.title}>
          📊CLICK NOW📊CLICK 
          </div>
          <div className={styles.dis}>
          xQc
          </div>
          <div className={styles.tags}>
            <div className={styles.tag}>
              <div className={styles.tagname}>
                minecraft
              </div>
            </div>
            <div className={styles.tag}>
              <div className={styles.tagname}>
                minecraft
              </div>
            </div>
            <div className={styles.tag}>
              <div className={styles.tagname}>
                minecraft
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}