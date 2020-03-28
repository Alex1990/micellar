const basename = (path: string, ext?: string, sep?: string): string => {
  const pathString = String(path)
  const lastSepIndex = pathString.lastIndexOf(sep || '/')
  const start = lastSepIndex > -1 ? lastSepIndex + 1 : 0
  const end = pathString.length - (ext || '').length
  return pathString.slice(start, end)
}

export default basename
