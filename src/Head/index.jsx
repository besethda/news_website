import Socials from "../Socials"
import Phone from "../Phone"

const Head = () => {
  return (
    <div className={styles.head}>
      <Socials />
      <h2 className={styles.title}>News Page</h2>
      <Phone />
    </div>
  )
}

export default Head