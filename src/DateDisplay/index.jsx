import styles from "./date.module.css"

let currentDate = new Date()

const DateDisplay = () => {
  return (
    <div className={styles.date}>{currentDate.toDateString()}</div>
  )
}

export default DateDisplay