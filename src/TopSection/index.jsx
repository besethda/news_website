import styles from "./topsection.module.css"
import RecentNews from "../RecentNews"
import FeaturedNews from "../FeaturedNews"
import SportsNews from "../SportsNews"

const TopSection = ({articleState, setArticleState}) => {
  return (
    <div className={styles.main}>
      <RecentNews setArticleState = {setArticleState}/>
      <FeaturedNews setArticleState = {setArticleState}/>
      <SportsNews setArticleState = {setArticleState}/>
    </div>
  )
}

export default TopSection