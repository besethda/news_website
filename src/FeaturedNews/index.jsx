import styles from "./featuredNews.module.css"
import { mainArticle } from "../../data/data.js"
import { getImageURL } from "../../utils/functions.js"

const FeaturedNews = ({setArticleState, usedCategory}) => {

  const setState = ()=> {
    setArticleState(mainArticle)
  }

  return (
    <div onClick={setState} className={styles.container}>
      <img className={styles.coverImage} src={`${getImageURL(mainArticle.image)}`}/>
      <div className={styles.headline}>{mainArticle.headline}</div>
      <div className={styles.text}>{mainArticle.deck}</div>
    </div>
  )
}

export default FeaturedNews