import styles from "./recentNews.module.css"
import RecentArticle from "../recentArticle"

const RecentNews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent News</div>
      <RecentArticle />
      <RecentArticle />
      <RecentArticle />
      <RecentArticle />
    </div>
  )
}

export default RecentNews