import styles from "./sportsNews.module.css"
import News from "../News"
import { sportsArticles } from "../../data/data.js"

const SportsNews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      {sportsArticles.map((article, i)=> {return <News key={i} {...article} />})}
      <div className={styles.divider}></div>
    </div>
  )
}

export default SportsNews