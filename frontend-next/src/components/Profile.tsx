// React
import { useContext } from 'react'

// Local
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="../../assets/images/no-image.png" alt="Garcia"/>
      <div>
        <strong>Usename</strong>
        <p>
          <img src="../../assets/icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}
