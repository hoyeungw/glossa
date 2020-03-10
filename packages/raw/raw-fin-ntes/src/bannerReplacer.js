// [(.*?)] 仅去掉括号本身
// \(.*?\) 去掉括号及括号内的任意字符
export const bannerReplacer = tx => String(tx)
  .replace(/( )|\(.*?\)/g, '')
  .replace(/(、)|：|:|\(/g, '_')
  .trim()
