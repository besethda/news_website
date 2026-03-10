import styles from "./category.module.css"

const Category = ({name}) => {
  return (
    <div className={styles.category}>{name.toUpperCase()}</div>
  )
}

export default Category