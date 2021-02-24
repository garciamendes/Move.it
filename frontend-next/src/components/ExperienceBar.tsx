// Local
import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div className={styles.progressBar}>
        <div style={{ width: '50%' }} />

        <span className={styles.currentExperience} style={{ left: '50%' }}>
          300px
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}