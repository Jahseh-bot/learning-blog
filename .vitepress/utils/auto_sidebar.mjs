// const fs = require('node:fs')
// const path = require('node:path')

import fs from 'node:fs'
import path from 'node:path'

const MD_REG = /\.md$/

function isDir(p) {
  const stat = fs.statSync(p)
  return stat.isDirectory()
}

function isEmpty(p) {
  const stat = fs.statSync(p)
  return stat.size === 0
}

const autoSidebar = function (p) {
  const dirname = path.join(__dirname, '../..', p)
  const dir = fs.readdirSync(dirname)
  const arr = dir.reduce((acc, cur) => {
    if (isDir(path.resolve(dirname, cur))) {
      const text = cur
      const link = p + '/' + cur + '/'
      const items = autoSidebar(p + '/' + cur)
      const item = {
        text,
        link,
        items,
        collapsed: true,
      }
      // console.log(item)
      acc.push(item)
    }
    else if (cur === 'index.md') { }
    else {
      const text = cur.split(MD_REG)[0]
      const link = p + '/' + cur
      const item = {
        text,
        link,
        collapsed: true,
      }
      MD_REG.test(cur) && !isEmpty(path.resolve(dirname, cur)) ? acc.push(item) : ''
    }
    return acc
  }, [])
  console.log(arr)
  return arr
}


export default autoSidebar