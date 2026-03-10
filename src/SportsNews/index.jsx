import styles from "./sportsNews.module.css"
import News from "../News"
import { featuredSportsArticles } from "../../data/data.js"
import { getArticlesByCategory } from "../../data/data.js"

const SportsNews = ({setArticleState, usedCategory}) => {

  let usedCategoryChosen = !usedCategory ? null : getArticlesByCategory(`${usedCategory}`)

  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      { !usedCategoryChosen ?
      featuredSportsArticles.map((article, i)=> {return <News key={i} article={article} setArticleState={setArticleState} />})
      : usedCategoryChosen.map((article, i)=> {return <News key={i} article={article} setArticleState={setArticleState} />})

      }

      <div className={styles.divider}></div>
    </div>
  )
}

export default SportsNews