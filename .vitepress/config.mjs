import { defineConfig } from 'vitepress'
import autoSidebar from './utils/auto_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "Gaara的前端学习笔记",
  description: "Gaara的前端学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/naruto.png',
   
    outlineTitle: '目录',
    outline: [2, 6],
    nav: [
      { text: 'HTML', link: '/HTML/index.md' },
      { text: 'CSS', link: '/CSS/' },
      { text: 'Vue', link: '/Vue/' },
      { text: 'Webpack', link: '/Webpack/' },
      { text: 'Server', link: '/server/' },
      {
        text: 'Nodejs', items: [
          { text: 'node', link: '/nodejs/node/' },
          { text: 'nestjs', link: '/nodejs/nestjs/' },
          { text: 'express', link: '/nodejs/express/' },
          { text: 'koa', link: '/nodejs/koa/' },
        ]
      },
    
    ],

    sidebar: {
      '/HTML/': autoSidebar('/HTML'),
      '/CSS/': autoSidebar('/CSS'),
      '/Vue/': autoSidebar('/Vue'),
      '/nodejs': autoSidebar('/nodejs'),
      '/Webpack': autoSidebar('/Webpack'),
      '/server': autoSidebar('/server'),
      '/nodejs/nestjs/': autoSidebar('/nodejs/nestjs'),
      '/nodejs/express/': autoSidebar('/nodejs/express'),
      '/nodejs/koa/': autoSidebar('/nodejs/koa'),
      '/nodejs/node/': autoSidebar('/nodejs/node'),
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Gaara'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jahseh-bot' }
    ],
    aside: true
  }
})

