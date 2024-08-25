import React, { useState } from 'react'
import frogStyles from './Frog.module.css'
import { Fade } from 'react-awesome-reveal'

function Frog() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [wasTouched, setWasTouched] = useState(false)

  const playCroakSound = () => {
    const audio = new Audio('/audios/Croak.mp3')

    if (!isPlaying && !wasTouched) {
      setIsPlaying(true)
      audio.play()

      setTimeout(() => {
        setIsPlaying(false)
      }, 4000)
    }
  }

  const fadeOut = () => {
    if (wasTouched) return

    setWasTouched(true)
  }

  return (
    <div
      className={`${frogStyles.frog} ${wasTouched ? frogStyles.hidden : ''}`}
    >
      <Fade>
        <img
          src='/images/sleeping-frog.png'
          onClick={() => {
            playCroakSound()
            fadeOut()
          }}
        />
      </Fade>
    </div>
  )
}

export default Frog
