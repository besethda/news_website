import styles from "./topsection.module.css"
import RecentNews from "../RecentNews"
import FeaturedNews from "../FeaturedNews"
import SportsNews from "../SportsNews"

const TopSection = () => {
  return (
    <div className={styles.main}>
      <RecentNews />
      <FeaturedNews />
      <SportsNews />
    </div>
  )
}

export default TopSection