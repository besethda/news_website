import styles from "./header.module.css"
import Head from "../Head"
import Nav from "../Nav"
import Breaking from "../Breaking"

const Header = ({articleState, setArticleState}) => {
  
  return (
    <header className={styles.header}>
      <Head />
      <Nav setArticleState={setArticleState} articleState={articleState}/>
      {!articleState && <Breaking setArticleState={setArticleState}/>}
    </header>
  )
}

export default Header