import { useState } from "react"
import { getImageURL } from "../../utils/functions"
import styles from "./articleView.module.css"

const ArticleView = ({articleState, setArticleState}) => {
  return (
      <div className={styles.container}>
        <div className={styles.title}>{articleState.headline}</div>
        <div className={styles.deck}>{articleState.deck}</div>
        <img className={styles.image} src={`${getImageURL(articleState.image)}`}></img>
        <div className={styles.story}>{articleState.story}</div>
      </div>
  )
}

export default ArticleView