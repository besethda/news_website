import styles from "./sportsNews.module.css"
import News from "../News"

const SportsNews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      <News/>
      <News/>
      <div className={styles.divider}></div>
    </div>
  )
}

export default SportsNews