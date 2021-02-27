// React
import { useContext } from 'react'

// Third party
import { FcApproval } from 'react-icons/fc'
import { MdPlayArrow } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

// Local
import styles from '../styles/components/Countdown.module.scss'
import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resertCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

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