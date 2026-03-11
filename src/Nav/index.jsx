import styles from "./nav.module.css"
import Date from "../DateDisplay"
import Category from "../Category"
import { allCategories } from "../../data/data"

const Nav = ({articleState, setArticleState, usedCategory, setUsedCategory}) => {

  const backToMain = () => {
    setArticleState(null)
  }

  return (
    <div className={styles.container} >
      {articleState ? <div onClick={backToMain} className={styles.back}><svg width="40" height="40" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg"><g id="color"/><g id="hair"/><g id="skin"/><g id="skin-shadow"/><g id="line"><polyline fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" points="46.1964,16.2048 26.8036,35.6651 46.1964,55.1254"/></g></svg></div> : <div className={styles.back}></div>}
      {allCategories && allCategories.map((e, i)=> <Category key={i} name={e} backToMain={backToMain} setUsedCategory={setUsedCategory} usedCategory={usedCategory}/>)}
      <Date />
    </div>
  )
}

export default Nav