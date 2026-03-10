import styles from "./news.module.css"
import { getImageURL } from "../../utils/functions"

const News = ({ image, headline, deck }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={`${getImageURL(image)}`}></img>
      <div className={styles.title}>{headline}</div>
      <div className={styles.text}>{deck}</div>
    </div>
  )
}

export default News