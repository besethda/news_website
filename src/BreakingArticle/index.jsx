import styles from "./breakingArticle.module.css"

const BreakingArticle = ({article, setArticleState}) => {

  const openArticle = () => {
    setArticleState(article)
  }

  return (
    <div onClick={openArticle} className={styles.article}>{article.headline}</div>
  )
}

export default BreakingArticle