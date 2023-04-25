export function calcTranslate(x1: number, x2: number, y1: number, y2: number) {
  const translateX = x1 - x2
  const translateY = y1 - y2

  return `${translateX}px ${translateY}px`
}

export function calcScale(
  width1: number,
  width2: number,
  height1: number,
  height2: number,
) {
  const scaleX = width1 / width2
  const scaleY = height1 / height2

  return `${scaleX} ${scaleY}`
}
