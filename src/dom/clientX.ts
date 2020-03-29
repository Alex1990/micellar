import isElement from './isElement'
import pageX from './pageX'
import scrollX from './scrollX'

export default function clientX (el: HTMLElement): number {
  let x = 0
  if (isElement(el)) {
    x = pageX(el) - scrollX()
  }
  return x
}
