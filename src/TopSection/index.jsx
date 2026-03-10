import styles from "./topsection.module.css"
import RecentNews from "../RecentNews"
import FeaturedNews from "../FeaturedNews"
import SportsNews from "../SportsNews"

const TopSection = ({setArticleState, usedCategory}) => {
  return (
    <div className={styles.main}>
      <RecentNews setArticleState = {setArticleState} usedCategory={usedCategory}/>
      <FeaturedNews setArticleState = {setArticleState} usedCategory={usedCategory}/>
      <SportsNews setArticleState = {setArticleState} usedCategory={usedCategory}/>
    </div>
  )
}

export default TopSection