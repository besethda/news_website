import styles from "./featuredNews.module.css"
import { featureArticle } from "../../data/data.js"

const featured = featureArticle[0]

const FeaturedNews = () => {
  return (
    <div className={styles.container}>
      <img className={styles.coverImage}/>
      <div className={styles.headline}>{featured.headline}</div>
      <div className={styles.text}>{featured.story}</div>
    </div>
  )
}

export default FeaturedNews