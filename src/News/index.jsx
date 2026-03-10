import styles from "./news.module.css"
import { getImageURL } from "../../utils/functions"

const News = ({ article, setArticleState}) => {

  const openArticle = () => {
    setArticleState(article)
  }

  return (
    <div onClick= {openArticle} className={styles.container}>
      <img className={styles.image} src={`${getImageURL(article.image)}`}></img>
      <div className={styles.title}>{article.headline}</div>
      <div className={styles.text}>{article.deck}</div>
    </div>
  )
}

export default News