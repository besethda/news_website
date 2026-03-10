import styles from "./categoryNews.module.css"
import CategoryArticle from "../CategoryArticle"

const CategoryNews = ({innerCategory = []}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{innerCategory.name.toUpperCase()}</div>
      <div className={styles.articles}>
        {innerCategory.articles.map((categoryInfo, i)=> <CategoryArticle key={i} categoryData = {categoryInfo} />)}
      </div>
    </div>
  )
}

export default CategoryNews