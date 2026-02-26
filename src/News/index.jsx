import styles from "./news.module.css"

const News = ({image, headline, deck}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image}></img>
      <div className={styles.title}>{headline}</div>
      <div className={styles.text}>{deck}</div>
    </div>
  )
}

export default News