// Local
import styles from '../styles/components/Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/garciamendes.png" alt="Garcia"/>
      <div>
        <strong>Matheus Garcia</strong>
        <p>
          <img src="../../assets/icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}