import fs from 'node:fs'
import path from 'node:path'

const MD_REG = /\.md$/


export function autoSidebar(p) {
  const dirname = path.join(__dirname,'../..', p)
  const dir = fs.readdirSync(dirname)
  const arr = dir.reduce((acc, cur) => {
    if (cur === 'index.md') {
    } else {
      const text = cur.split(MD_REG)[0]
      const link = p + '/'+cur
      const item = {
        text,
        link
      }
      MD_REG.test(cur) ? acc.push(item) : ''
    }
    return acc
  }, [])
  console.log(arr)
  return arr
}
