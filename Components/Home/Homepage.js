import Videolist from "./Videolist/Videolist"
import styles from "./Homepage.module.css"

export default function Homepage() {
    return (
      <div className={styles.Homepage}>
        <div className={styles.container}>
          <div className={styles.videocatagory}>
            Recommended Videos
          </div>
          <Videolist />
        </div>
        <hr className={styles.hr}  />
        
        <div className={styles.container}>
          <div className={styles.videocatagory}>
            Recommended Videos
          </div>
          <Videolist />
        </div>
        <hr className={styles.hr} />
        
        <div className={styles.container}>
          <div className={styles.videocatagory}>
            Recommended Videos
          </div>
          <Videolist />
        </div>
        <hr className={styles.hr} />
        
        <div className={styles.container}>
          <div className={styles.videocatagory}>
            Recommended Videos
          </div>
          <Videolist />
        </div>
        <hr className={styles.hr} />
        
        <div className={styles.container}>
          <div className={styles.videocatagory}>
            Recommended Videos
          </div>
          <Videolist />
        </div>
        <hr className={styles.hr} />
        
        <div className={styles.container}>
          <div className={styles.videocatagory}>
            Recommended Videos
          </div>
          <Videolist />
        </div>
        <hr className={styles.hr}  />
      </div>
    )
  }
  