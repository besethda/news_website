import styles from "./sportsNews.module.css"
import News from "../News"
import { featuredSportsArticles } from "../../data/data.js"

const SportsNews = ({articleState, setArticleState}) => {
  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      {featuredSportsArticles.map((article, i)=> {return <News key={i} {...article} />})}
      <div className={styles.divider}></div>
    </div>
  )
}

export default SportsNews