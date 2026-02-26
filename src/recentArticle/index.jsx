import styles from "./recentArticle.module.css"

const RecentArticle = ({headline, deck}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{headline}</div>
      <div className={styles.text}>{deck}</div>
    </div>
  )
}

export default RecentArticle