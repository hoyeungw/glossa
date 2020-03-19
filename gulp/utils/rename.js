const NAME = 'name'

export const rename = (target, newName) => {
  return Object.defineProperty(target, NAME, {
    value: newName,
  })
}
