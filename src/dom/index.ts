import clientX from './clientX'
import clientY from './clientY'
import createEvent from './createEvent'
import domReady from './domReady'
import insertScript from './insertScript'
import isElement from './isElement'
import isInViewport from './isInViewport'
import isWindow from './isWindow'
import pageX from './pageX'
import pageY from './pageY'
import scrollTo from './scrollTo'
import scrollX from './scrollX'
import scrollY from './scrollY'
import viewport from './viewport'

export type { CreateEventOptions } from './createEvent'
export type { AnyFunction } from './domReady'
export type { InsertScriptOptions } from './insertScript'
export type { ScrollToOptions } from './scrollTo'
export type { Viewport } from './viewport'

export default {
  clientX,
  clientY,
  createEvent,
  domReady,
  insertScript,
  isElement,
  isInViewport,
  isWindow,
  pageX,
  pageY,
  scrollTo,
  scrollX,
  scrollY,
  viewport
}
