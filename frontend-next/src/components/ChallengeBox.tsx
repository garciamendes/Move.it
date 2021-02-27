// React
import { useContext } from 'react'

// Local
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {
  const { activeChallenge, resertChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resertCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resertCountdown()
  }

  function handleChallengeFailed() {
    resertChallenge()
    resertCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (

        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`../../assets/icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type='button'
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>

      ) : (

          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="../../assets/icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
          </div>

        )}
    </div>
  )
}