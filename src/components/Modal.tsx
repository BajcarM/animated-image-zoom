import { useState, useEffect } from 'react'
import type * as CSS from 'csstype'
import styles from './Modal.module.css'
import { calcScale, calcTranslate } from '../utils/calcTransforms'
import useClientRect from '../hooks/useClientRect'
import { GalleryImage } from '../assets/images/gallery'

type Props = {
  imageSrc: GalleryImage
  initialPosition: {
    top: number
    left: number
    height: number
    width: number
  }
  animationDuration: number
  animationDelay: number
  onClick: () => void
}

export default function Modal({
  imageSrc,
  initialPosition,
  animationDuration,
  animationDelay,
  onClick,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const [rect, ref] = useClientRect<HTMLImageElement>()

  const initialTransform: CSS.Properties = {
    translate: calcTranslate(
      initialPosition.left,
      rect?.left ?? 0,
      initialPosition.top,
      rect?.top ?? 0,
    ),
    scale: calcScale(
      initialPosition.width,
      rect?.width ?? initialPosition.width,
      initialPosition.height,
      rect?.height ?? initialPosition.height,
    ),
  }

  const enterTransform: CSS.Properties = {
    translate: '0',
    scale: '1',
    transitionDuration: `${animationDuration}ms`,
  }

  const exitTransform: CSS.Properties = {
    translate: calcTranslate(
      initialPosition.left,
      rect?.left ?? 0,
      initialPosition.top,
      rect?.top ?? 0,
    ),
    scale: calcScale(
      initialPosition.width,
      rect?.width ?? initialPosition.width,
      initialPosition.height,
      rect?.height ?? initialPosition.height,
    ),
    transitionDuration: `${animationDuration}ms`,
  }

  const [transition, setTransition] = useState({})

  useEffect(() => {
    if (!imageLoaded) return

    setTransition(initialTransform)

    const timer = setTimeout(() => {
      setTransition(enterTransform)
    }, animationDelay)

    return () => clearTimeout(timer)
  }, [imageLoaded])

  function handleClose() {
    setTransition(exitTransform)
    onClick()
  }

  return (
    <div
      className={styles.container}
      onClick={handleClose}
    >
      <img
        src={imageSrc.sm.jpg}
        className={styles.imageBig}
        ref={ref}
        style={transition}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  )
}
