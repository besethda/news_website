import styles from "./categoryArticle.module.css"

const CategoryArticle = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image}/>
      <div className={styles.title}>China is Communist</div>
      <div className={styles.text}>In the past two weeks China has always been communist.</div>
    </div>
  )
}

export default CategoryArticle