import styles from "./recentArticle.module.css"

const RecentArticle = ({article, articleState}) => {

  let headline, deck, story, image, category
  

  return (
    <div className={styles.container}>
      <div className={styles.title}>{headline}</div>
      <div className={styles.text}>{deck}</div>
    </div>
  )
}

export default RecentArticle