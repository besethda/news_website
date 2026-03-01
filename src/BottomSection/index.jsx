import styles from "./bottomSection.module.css"
import CategoryNews from "../CategoryNews/index.jsx"
import { categoryArticles } from "../../data/data.js"

const BottomSection = () => {

  console.log(categoryArticles)
  return (
    <div className={styles.main}>
      {categoryArticles.map((category, i)=> <CategoryNews key={i} {...category}/>)}
    </div>
  )
}

export default BottomSection