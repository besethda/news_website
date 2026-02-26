import styles from "./breakingArticle.module.css"

const BreakingArticle = ({headline}) => {
  return (
    <div className={styles.article}>{headline}</div>
  )
}

export default BreakingArticle