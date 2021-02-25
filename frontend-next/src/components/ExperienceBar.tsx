// React
import { useContext } from 'react'

// Local
import styles from '../styles/components/ExperienceBar.module.scss'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div className={styles.progressBar}>
        <div style={{ width: `${porcentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${porcentToNextLevel}%` }}>
          {currentExperience} px
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}