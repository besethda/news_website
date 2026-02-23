import styles from "./featuredNews.module.css"

const FeaturedNews = () => {
  return (
    <div className={styles.container}>
      <img className={styles.coverImage}></img>
      <div className={styles.headline}>Canada is the worst country ever to exist</div>
      <div className={styles.text}></div>
    </div>
  )
}

export default FeaturedNews