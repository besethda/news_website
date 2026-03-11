import styles from "./recentNews.module.css"
import RecentArticle from "../RecentArticle"
import { recentArticles, recentAreaArticles } from "../../data/data.js"

const RecentNews = ({setArticleState, usedCategory}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent News</div>
      {!usedCategory ? recentArticles.map((article, i)=> <RecentArticle setArticleState={setArticleState} key={i} article = {article}/>) 
      : recentAreaArticles.map((article, i)=> <RecentArticle setArticleState={setArticleState} key={i} article = {article}/>)}
    </div>
  )
}

export default RecentNews