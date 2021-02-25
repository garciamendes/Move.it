// React
import { useContext } from 'react'

// Local
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`../../assets/icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type='button'
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>

      ) : (

        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="../../assets/icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>

      ) }
    </div>
  )
}