import styles from "./breaking.module.css"
import BreakingArticle from "../BreakingArticle"
import { breakingArticles } from "../../data/data.js"

const Breaking = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breakingContainer}>
        <div className={styles.breaking}>Breaking News</div>
        <div className={styles.articleContainer}>
        {breakingArticles.map((article, i)=> <BreakingArticle key={i} {...article}/>)}
        </div>
      </div>
    </div>
  )
}

export default Breaking