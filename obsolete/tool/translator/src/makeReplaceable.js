/** @deprecated use @spare/translator instead */
export const makeReplaceable = dict => Object
  .defineProperty(dict, Symbol.replace, {
    value (word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj)
      return after ? after(word) : word
    },
    configurable: true,
    enumerable: false
  })
