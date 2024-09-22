import React, { useState } from 'react'
import frogStyles from './Frog.module.css'
import { Fade } from 'react-awesome-reveal'

function Frog() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [wasTouched, setWasTouched] = useState(false)
  const [position, setPosition] = useState({ bottom: -120, right: 0 })
  const [rotation, setRotation] = useState(0)

  const frogWidth = 300
  const frogHeight = 300
  const frogOffset = -100

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
    }, 1000)
  }

  const moveFrog = () => {
    const edge = Math.floor(Math.random() * 4)
    let randomBottom = 0
    let randomRight = 0
    let newRotation = 0

    const maxRight = window.innerWidth - frogWidth - frogOffset
    const maxBottom = window.innerHeight - frogHeight - frogOffset

    switch (edge) {
      case 0:
        randomBottom = frogOffset
        randomRight = Math.random() * (maxRight - frogOffset) + frogOffset
        newRotation = 0
        break
      case 1:
        randomBottom = maxBottom
        randomRight = Math.random() * (maxRight - frogOffset) + frogOffset
        newRotation = 180
        break
      case 2:
        randomBottom = Math.random() * (maxBottom - frogOffset) + frogOffset
        randomRight = frogOffset
        newRotation = -90
        break
      case 3:
        randomBottom = Math.random() * (maxBottom - frogOffset) + frogOffset
        randomRight = maxRight
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
