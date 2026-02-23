import styles from "./nav.module.css"
import Date from "../DateDisplay"
import Category from "../Category"

const Nav = () => {
  return (
    <div className={styles.container} >
      <Category />
      <Date />
    </div>
  )
}

export default Nav