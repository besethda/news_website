import styles from "./header.module.css"
import Head from "../Head"
import Nav from "../Nav"
import Breaking from "../Breaking"

const Header = ({articleState, setArticleState, usedCategory, setUsedCategory}) => {
  
  return (
    <header className={styles.header}>
      <Head />
      <Nav setArticleState={setArticleState} articleState={articleState} usedCategory={usedCategory} setUsedCategory={setUsedCategory}/>
      {!articleState && <Breaking setArticleState={setArticleState}/>}
    </header>
  )
}

export default Header