import styles from "./category.module.css"

const Category = ({name, setUsedCategory, usedCategory}) => {

  const seeCategory = () => {
    setUsedCategory(name)
  }

  return (
    <div onClick={seeCategory} className={`${styles.category} ${usedCategory == name && styles.active}`}>{name.toUpperCase()}</div>
  )
}

export default Category