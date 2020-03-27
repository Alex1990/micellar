export default function swapEndian (arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    arr[i] = (((n << 8) | (n >>> 24)) & 0x00FF00FF) | ((n << 24) | (n >>> 8)) & 0xFF00FF00
  }
  return arr
}
