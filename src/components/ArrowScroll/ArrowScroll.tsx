'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import headerStyles from '../../components/Header.module.css'

export default function ScrollArrow() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content')
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={headerStyles.arrow} onClick={scrollToContent}>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  )
}
