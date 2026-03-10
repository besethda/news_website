import styles from "./categoryArticle.module.css"
import { getImageURL } from "../../utils/functions"

const CategoryArticle = ({categoryData}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={`${getImageURL(categoryData.image)}`}/>
      <div className={styles.title}>{categoryData.headline}</div>
      <div className={styles.text}>{categoryData.deck}</div>
    </div>
  )
}

export default CategoryArticle