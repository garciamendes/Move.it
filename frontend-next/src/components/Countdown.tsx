// React
import { useState, useEffect, useContext } from 'react'

// Third party
import { FcApproval } from 'react-icons/fc'
import { MdPlayArrow } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

// Local
import styles from '../styles/components/Countdown.module.scss'
import { ChallengesContext } from '../contexts/ChallengesContext'

// javascript
let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')


  function startCountdown() {
    setIsActive(true)
  }

  function resertCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>

      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
          <FcApproval className={styles.iconApproval} size={25}/>

        </button>
      ) : (
          <>
            { isActive ? (

              <button
                type='button'
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resertCountdown}
              >
                Abondonar ciclo
                <IoMdClose size={25} className={styles.iconClose} />
              </button>

            ) : (

                <button
                  type='button'
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                  <MdPlayArrow color={'white'} size={25} className={styles.iconPlay}/>
                </button>
              )
            }
          </>
        )
      }

    </>
  )
}