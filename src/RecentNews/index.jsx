import styles from "./recentNews.module.css"
import RecentArticle from "../RecentArticle"
import { recentArticles } from "../../data/data.js"

const RecentNews = ({articleState}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent News</div>
      {recentArticles.map((article, i)=> <RecentArticle articleState={articleState} key={i} article = {article}/>)}
    </div>
  )
}

export default RecentNews