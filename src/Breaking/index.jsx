import styles from "./breaking.module.css"
import BreakingArticle from "../BreakingArticle"

const Breaking = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breakingContainer}>
        <div className={styles.breaking}>Breaking News</div>
        <div className={styles.articleContainer}>
        <BreakingArticle />
        </div>
      </div>
    </div>
  )
}

export default Breaking