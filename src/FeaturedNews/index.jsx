import styles from "./featuredNews.module.css"
import { mainArticle, mainAreaArticle } from "../../data/data.js"
import { getImageURL } from "../../utils/functions.js"

const FeaturedNews = ({setArticleState, usedCategory}) => {

  let usingArticle = !usedCategory ? mainArticle : mainAreaArticle

  const setState = ()=> {
    setArticleState(usingArticle)
  }

  return (
    <div onClick={setState} className={styles.container}>
      <img className={styles.coverImage} src={`${getImageURL(usingArticle.image)}`}/>
      <div className={styles.headline}>{usingArticle.headline}</div>
      <div className={styles.text}>{usingArticle.deck}</div>
    </div>
  )
}

export default FeaturedNews