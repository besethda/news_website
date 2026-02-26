import styles from "./bottomSection.module.css"
import CategoryNews from "../CategoryNews/index.jsx"

const BottomSection = () => {
  return (
    <div className={styles.main}>
      <CategoryNews />
    </div>
  )
}

export default BottomSection