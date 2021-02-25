// React
import { useContext } from 'react'

// Local
import styles from '../styles/components/CompletedChallenges.module.scss'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}