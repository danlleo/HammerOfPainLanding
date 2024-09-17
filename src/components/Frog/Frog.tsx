import React, { useState } from 'react'
import frogStyles from './Frog.module.css'
import { Fade } from 'react-awesome-reveal'

function Frog() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [wasTouched, setWasTouched] = useState(false)
  const [position, setPosition] = useState({ bottom: -120, right: 0 })
  const [rotation, setRotation] = useState(0)

  const frogOffset = 100;

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

    setTimeout(() => {
      moveFrog()
      setWasTouched(false)
    }, 10000)
  }

  const moveFrog = () => {
    const edge = Math.floor(Math.random() * 4)
    let randomBottom = 0
    let randomRight = 0
    let newRotation = 0

    switch (edge) {
      case 0:
        randomBottom = -120
        randomRight = Math.random() * (window.innerWidth - frogOffset)
        newRotation = 0
        break
      case 1:
        randomBottom = window.innerHeight - 200
        randomRight = Math.random() * (window.innerWidth - frogOffset)
        newRotation = 180
        break
      case 2:
        randomBottom = Math.random() * (window.innerHeight - frogOffset)
        randomRight = 0
        newRotation = -90
        break
      case 3:
        randomBottom = Math.random() * (window.innerHeight - frogOffset)
        randomRight = window.innerWidth - 200
        newRotation = 90
        break
      default:
        break
    }

    setPosition({ bottom: randomBottom, right: randomRight })
    setRotation(newRotation)
  }

  return (
    <div
      className={`${frogStyles.frog} ${wasTouched ? frogStyles.hidden : ''}`}
      style={{ bottom: position.bottom, right: position.right }}
    >
      <Fade>
        <img
          src='/images/sleeping-frog.png'
          style={{ transform: `rotate(${rotation}deg)` }}
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
