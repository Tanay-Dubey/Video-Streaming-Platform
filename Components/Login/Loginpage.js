import styles from "./Login.module.css";
import Image from "next/image";
import profile from "../Home/Videolist/Video/2.png"

export default function Loginpage() {
  return (
    <div className={styles.Register}>
        <div className={styles.title}>
            <Image
                src={profile}
                alt="img"
                className={styles.profile}
            />
            Log in to twitch
          </div>
          <form action="" className={styles.form}>
              Username
              <input type="text" name="username" id="" className={styles.input} />
              <div className={styles.gap}>hi</div>
              Password
              <input type="password" name="password" id="" className={styles.input} />
              <input type="button" value="Login" className={styles.button} />
          </form>
          <div className={styles.pagechange} href="">
              Don't have a account ? Sign up
          </div>
    </div>
  )
}