import styles from "./category.module.css"
import { changeCurrentCategory } from "../../data/data"

const Category = ({name, backToMain, setUsedCategory, usedCategory}) => {

  const seeCategory = () => {
    backToMain()
    setUsedCategory(name)
    changeCurrentCategory(name)
  }

  return (
    <div onClick={seeCategory} className={`${styles.category} ${usedCategory == name && styles.active}`}>{name.toUpperCase()}</div>
  )
}

export default Category