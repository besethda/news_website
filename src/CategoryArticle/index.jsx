import styles from "./categoryArticle.module.css"

const CategoryArticle = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image}/>
      <div className={styles.title}>Category News</div>
      <div className={styles.text}>In the past two weeks Trump has done nothing.</div>
    </div>
  )
}

export default CategoryArticle