import Socials from "../Socials"
import Phone from "../Phone"
import styles from "./head.module.css"

const Head = () => {
  return (
    <div className={styles.head}>
      <Socials />
      <h2 className={styles.title}>News For Today</h2>
      <Phone />
    </div>
  )
}

export default Head