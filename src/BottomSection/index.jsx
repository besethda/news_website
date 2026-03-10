import styles from "./bottomsection.module.css"
import CategoryNews from "../CategoryNews/index.jsx"
import { categories } from "../../data/data.js"

const BottomSection = () => {
  return (
    <div className={styles.main}>
      {categories.map((category, i)=> <CategoryNews key={i} innerCategory={category}/>)}
    </div>
  )
}

export default BottomSection