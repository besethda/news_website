import styles from "./header.module.css"
import Head from "../Head"
import Nav from "../Nav"
import Breaking from "../Breaking"

const Header = () => {
  return (
    <header className={styles.header}>
      <Head />
      <Nav />
      <Breaking />
    </header>
  )
}

export default Header