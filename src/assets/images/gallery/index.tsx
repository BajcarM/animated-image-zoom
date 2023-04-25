import coffee1LgJpg from './coffee-1-lg.jpg'
import coffee1LgWebp from './coffee-1-lg.webp'
import coffee1MdJpg from './coffee-1-md.jpg'
import coffee1MdWebp from './coffee-1-md.webp'
import coffee1SmJpg from './coffee-1-sm.jpg'
import coffee1SmWebp from './coffee-1-sm.webp'

const GALLERY: GalleryImage[] = [
  {
    sm: {
      jpg: coffee1SmJpg,
      webp: coffee1SmWebp,
    },
    md: {
      jpg: coffee1MdJpg,
      webp: coffee1MdWebp,
    },
    lg: {
      jpg: coffee1LgJpg,
      webp: coffee1LgWebp,
    },
  },
]

export default GALLERY

export type GalleryImage = {
  sm: {
    jpg: string
    webp: string
  }
  md: {
    jpg: string
    webp: string
  }
  lg: {
    jpg: string
    webp: string
  }
}
