import styles from "./news.module.css"

const News = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image}></img>
      <div className={styles.title}>Elon musk is a bitch</div>
      <div className={styles.text}>Hello </div>
    </div>
  )
}

export default News