import styles from "./recentArticle.module.css"

const RecentArticle = ({article, setArticleState}) => {

  const openArticleState = () => {
    setArticleState(article)
  }

  return (
    <div onClick={openArticleState} className={styles.container}>
      <div className={styles.title}>{article.headline}</div>
      <div className={styles.text}>{article.deck}</div>
    </div>
  )
}

export default RecentArticle