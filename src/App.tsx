import styles from './App.module.css'
import GALLERY from './assets/images/gallery'
import Modal from './components/Modal'
import { useEffect, useState } from 'react'
import useClientRect from './hooks/useClientRect'

function App() {
  const testImage = GALLERY[0]
  const animationDuration = 2000
  const animationDelay = 500

  const [openModal, setOpenModal] = useState(false)
  const [isClosingModal, setIsClosingModal] = useState(false)

  const [image1Rect, image1Ref] = useClientRect<HTMLImageElement>()

  useEffect(() => {
    if (!isClosingModal) return

    const timer = setTimeout(() => {
      setOpenModal(false)
      setIsClosingModal(false)
    }, animationDuration + animationDelay)

    return () => clearTimeout(timer)
  }, [isClosingModal])

  return (
    <>
      <img
        src={testImage.sm.jpg}
        ref={image1Ref}
        className={styles.imageSmall}
        onClick={() => setOpenModal((state) => !state)}
        height={400}
        width={400}
      />

      {openModal && (
        <Modal
          imageSrc={testImage}
          initialPosition={{
            top: image1Rect?.top ?? 0,
            left: image1Rect?.left ?? 0,
            width: image1Rect?.width ?? 0,
            height: image1Rect?.height ?? 0,
          }}
          animationDuration={animationDuration}
          animationDelay={animationDelay}
          onClick={() => setIsClosingModal(true)}
        />
      )}

      <ul>
        <li>Top {image1Rect?.top}</li>
        <li>Right {image1Rect?.right}</li>
        <li>Bottom {image1Rect?.bottom}</li>
        <li>Left {image1Rect?.left}</li>
        <li>Height {image1Rect?.height}</li>
        <li>Width {image1Rect?.width}</li>
      </ul>
    </>
  )
}

export default App
