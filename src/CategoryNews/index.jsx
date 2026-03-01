import styles from "./categoryNews.module.css"
import CategoryArticle from "../CategoryArticle"

const CategoryNews = ({category}) => {

  console.log(category)
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <div className={styles.articles}>
        <CategoryArticle />
        <CategoryArticle />
        <CategoryArticle />
      </div>
    </div>
  )
}

export default CategoryNews