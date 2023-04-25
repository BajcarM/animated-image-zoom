import { useCallback, useState } from 'react'

export type RectResult = {
  x: number
  y: number
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
} | null

export default function useClientRect<T extends HTMLElement>(): [
  RectResult,
  (node: T) => void,
] {
  const [rect, setRect] = useState<RectResult>(null)
  const ref = useCallback((node: T) => {
    if (node === null) return

    // bez eventListeneru merilo kdyz se obrazek mountnul, ale nebyl nacteny a proto byla height a width 0
    node.addEventListener('load', () => {
      const { x, y, bottom, height, left, right, top, width } =
        node.getBoundingClientRect()

      setRect({ x, y, bottom, height, left, right, top, width })
    })
  }, [])

  return [rect, ref]
}
