import styles from "./bottomsection.module.css"
import CategoryNews from "../CategoryNews/index.jsx"
import { categories } from "../../data/data.js"

const BottomSection = ({setArticleState}) => {
  return (
    <div className={styles.main}>
      {categories.map((category, i)=> <CategoryNews key={i} innerCategory={category} setArticleState={setArticleState}/>)}
    </div>
  )
}

export default BottomSection