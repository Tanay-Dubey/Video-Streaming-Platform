import styles from "./Register.module.css";
import Image from "next/image";
import profile from "../Home/Videolist/Video/2.png"

export default function Register() {
  return (
    <div className={styles.Register}>
        <div className={styles.title}>
            <Image
                src={profile}
                alt="img"
                className={styles.profile}
            />
            Signup to twitch
          </div>
          <form action="" className={styles.form}>
              Username
              <input type="text" name="username" id="" className={styles.input} />
              <div className={styles.gap}>hi</div>
              Password
              <input type="password" name="password" id="" className={styles.input} />
              <input type="button" value="Signup" className={styles.button} />
          </form>
          <div className={styles.pagechange} href="">
              Already have a account ? Log in
          </div>
    </div>
  )
}