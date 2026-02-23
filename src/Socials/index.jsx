import styles from "./socials.module.css"
import { getImageURL } from "../../utils/functions"

const Socials = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={getImageURL('facebook.png')} ></img>
    </div>
  )
}

export default Socials