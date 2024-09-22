'use client'

import Image from 'next/image'
import sleepingFrogLogo from '../../public/images/sleepingfrog_logo_text.png'
import bakedGamesLogo from '../../public/images/LOGO_BLACK_BACKGROUND_BakedGames.png'
import fmodLogo from '../../public/images/156-1566681_fmod-1-fmod.webp'
import playwayLogo from '../../public/images/playway.svg'
import clickHold from '../../public/images/click_hold.jpg'
import graphic from '../../public/images/graphic.jpg'
import puzzles from '../../public/images/puzzles.jpg'
import quests from '../../public/images/quests.jpg'
import headerStyles from '../components/Header.module.css'
import contentStyles from '../components/Content.module.css'
import { Fade } from 'react-awesome-reveal'
import Frog from '@/components/Frog/Frog'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        message,
      }),
    })

    if (res.ok) {
      setStatus('Message sent successfully!')
    } else {
      setStatus('Failed to send message. Please try again.')
    }
  }

  return (
    <div className={headerStyles.container}>
      <header className={headerStyles.header}>
        <video
          autoPlay
          muted
          loop
          id='background-video'
          className={headerStyles.video}
        >
          <source src='/videos/video.mp4' />
          Your browser does not support the video tag.
        </video>
        <div className={headerStyles.overlay} />
        <div className={headerStyles.gradient} />
        <div className={headerStyles.info}>
          <h1 className={headerStyles.title}>
            <span>Hammer</span>
            <span>Of</span>
            <span>Pain</span>
          </h1>
          <h3 className={headerStyles.titleInfo}>Souls-Like Adventure</h3>
        </div>
        {/* <ScrollArrow /> */}
      </header>
      <article id='content' className={contentStyles.article}>
        {/* <div className={contentStyles.upperGradient}></div> */}
        <Fade direction='down' triggerOnce>
          <div className={contentStyles.headlines}>
            <h2>What is</h2>
            <h2>Hammer Of Pain?</h2>
          </div>
        </Fade>
        <Fade delay={400} triggerOnce>
          <p>
            This pixelated 2D platformer immerses you into the grim corners of
            the Middle Ages, where the once vibrant spark of life has been
            replaced by the cold shadow of madness.
          </p>
        </Fade>
        <div className={contentStyles.productionContainer}>
          <Fade>
            <a
              href='https://store.steampowered.com/app/2438440/Hammer_of_Pain/'
              target='_blank'
              className={contentStyles.production}
            >
              Whishlist On Steam
            </a>
          </Fade>
        </div>
      </article>

      <article id='content' className={contentStyles.article}>
        <Fade direction='down' triggerOnce>
          <h1 className={contentStyles.contentTitle}>Core</h1>
        </Fade>
        <Fade direction='up' triggerOnce cascade damping={0.1}>
          <div className={contentStyles.promotionItem}>
            <img src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2438440/ss_9d3faf7c6b88301b3001431a1de3087fe027d889.1920x1080.jpg?t=1721102168' />
            <div className={contentStyles.itemInfo}>
              <h2>The Gameplay</h2>
              <p>
                In Hammer of pain, you will play as the blacksmith Silver and
                his daughter Nora Fight a variety of creatures. Unique enemies
                with their own pattern of behavior. Learn the attacks of the
                enemies and destroy them all. Collect various valuables and
                improve your character as you progress through the game. Explore
                the nooks and crannies of the kingdoms of Arkon and Riven, learn
                all their secrets, and try not to plunge into darkness.
              </p>
            </div>
          </div>
          <div className={contentStyles.promotionItem}>
            <div className={contentStyles.itemInfo}>
              <h2>History of our World</h2>
              <p>
                Step into a realm where the past and legend are inseparably
                blended, and delve into the existences of the smith Silver and
                Nora. They embody the spirit of this game, vibrant and full of
                life characters, their narratives and trials captivating, their
                destinies moving the profound chords of the heart.
              </p>
              <p>
                Every stride you take in this game unravels a new facet of this
                astonishing tale. Decipher the web of enigmas in the kingdoms,
                probe into the most concealed crevices of Arkon and Riven
                territories. Here, every fragment, every leaf has a tale to
                tell, and all are eager for your exploration.
              </p>
              <p>
                Unearth a world where folklore and reality converge into a
                single entity, where the then and now are tightly woven
                together. Delve into the hidden truths, submerged in the flow of
                time. In the realm of Hammer Of Pain, each instant uncovers a
                fresh chapter, each move unveils new revelations. Are you
                prepared to tread this journey and learn the full narrative of
                Silver and Nora?
              </p>
            </div>
            <img src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2438440/ss_e83b1883dbb4bc606f53f736cb70173c4d8a240c.1920x1080.jpg?t=1721102168' />
          </div>
        </Fade>
      </article>

      <article id='content' className={contentStyles.article}>
        <Fade direction='down' triggerOnce>
          <h1 className={contentStyles.contentTitle}>Mechanics</h1>
        </Fade>
        <div className={contentStyles.promotionContainer}>
          <div className={contentStyles.promotionSmallItem}>
            <Image src={clickHold} alt='' />
            <Fade direction='left' triggerOnce>
              <div className={contentStyles.promotionSmallItemInfo}>
                <h2>Combat system "Click-and-Hold"</h2>
                <p>
                  Learn to master your strikes. Hold the key and release it at
                  the moment when the world stands still in anticipation. Your
                  blows can shatter stone and cleave the wind, obliterating all
                  enemies in your path. But power is only one side of the coin.
                  In a world where danger lurks at every turn, the ability to
                  react swiftly and dodge at the decisive moment becomes the key
                  to survival. Evade enemy strikes, glide smoothly between the
                  streams of arrows, avoid traps.
                </p>
              </div>
            </Fade>
          </div>
          <div
            className={`${contentStyles.promotionSmallItem} ${contentStyles.reverse}`}
          >
            <Image src={quests} alt='' />
            <Fade direction='right' triggerOnce>
              <div className={contentStyles.promotionSmallItemInfo}>
                <h2>More than 129+ different quests</h2>
                <p>
                  Enter a world where history and legend intertwine into one,
                  and immerse yourself in the lives of the blacksmith Silver and
                  his daughter Nora. They are the soul of this game, lively and
                  vivid characters, their stories and challenges mesmerizing and
                  their fates touching the deepest strings of the soul. Unravel
                  the tangle of mysteries of the kingdoms, look into the most
                  hidden corners of the lands of Arkon and Riven.
                </p>
              </div>
            </Fade>
          </div>
          <div className={contentStyles.promotionSmallItem}>
            <Image src={puzzles} alt='' />
            <Fade direction='left' triggerOnce>
              <div className={contentStyles.promotionSmallItemInfo}>
                <h2>4 different locations with their own puzzles</h2>
                <p>
                  Your daughter has vanished into the darkness of this world,
                  leaving behind nothing but echoes of her memories. You are to
                  navigate through myriad trials to decipher her fate and
                  unravel the ghostly threads of history that led to the
                  collapse of kingdoms. Each step you take will be an imprint on
                  the bloody annals of history, each leap - a desperate reach
                  for hope in the abyss of despair. You'll face intricate
                  puzzles, intriguing quests, and clashes with creatures
                  dwelling in this insane world.
                </p>
              </div>
            </Fade>
          </div>
          <div
            className={`${contentStyles.promotionSmallItem} ${contentStyles.reverse}`}
          >
            <Image src={graphic} alt='' />
            <Fade direction='right' triggerOnce>
              <div className={contentStyles.promotionSmallItemInfo}>
                <h2>Stylish, hand-drawn pixel art</h2>
                <p>
                  Meet a world where every pixel has been carefully hand-drawn,
                  bringing Hammer Of Pain's unique style to life. Immerse
                  yourself in the atmosphere of the Middle Ages. Every pixel
                  reflects the hard work, love and passion put into this game.
                  Here you will find a world where light and darkness battle for
                  dominance, creating extraordinarily colorful and vivid scenes.
                  Enjoy every moment, every glance, every step in this uniquely
                  hand-painted world.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </article>

      <article id='content' className={contentStyles.article}>
        <Fade direction='down' triggerOnce>
          <h1 className={contentStyles.contentTitle}>Discover</h1>
        </Fade>
        <div className={contentStyles.responsiveVideo}>
          <iframe
            src='https://www.youtube.com/embed/S3Hmt1vHW40?si=ILITdGBmIiET-reA'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className={contentStyles.frame}
          />
        </div>
      </article>

      <article id='content' className={contentStyles.article}>
        <Fade triggerOnce>
          <form
            className={contentStyles.stayTuned}
            action='mailto:your.email@example.com'
            method='post'
            encType='text/plain'
            onSubmit={handleSubmit}
          >
            <Fade direction='down' triggerOnce>
              <h1>
                Got Any Questions<span>?</span>
              </h1>
            </Fade>
            <Fade direction='up' triggerOnce>
              <div className={contentStyles.formContent}>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='your@emailadress.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  id='question'
                  name='question'
                  placeholder='Your Question'
                  rows={15}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button type='submit'>Ask</button>
              </div>
            </Fade>
            {status && (
              <p className={contentStyles.status} style={{ marginTop: '1rem' }}>
                {status}
              </p>
            )}
          </form>
        </Fade>
        <div className={contentStyles.footer}>
          <Fade triggerOnce duration={3000} style={{ width: '100%' }}>
            <Image
              src={sleepingFrogLogo}
              alt=''
              className={contentStyles.footerSleepingFrog}
            />
            <div className={contentStyles.footerContent}>
              <Image src={bakedGamesLogo} alt='' />
              <Image src={fmodLogo} alt='' />
              <Image src={playwayLogo} alt='' />
            </div>
          </Fade>
        </div>
      </article>
      <Frog />
      {/* <ScrollHandler /> */}
    </div>
  )
}
