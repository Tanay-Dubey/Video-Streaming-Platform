
import styles from "./Signup.module.css";
import Register from "@/Components/Signup/Register";
import Loginpage from "@/Components/Login/Loginpage";
export default function Signup() {
  return (
    <div className={styles.signup}>
        <Register/>
    </div>
  )
}