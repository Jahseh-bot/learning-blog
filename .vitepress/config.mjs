import { defineConfig } from 'vitepress'
import { autoSidebar } from './utils/auto_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "Gaara的前端学习笔记",
  description: "Gaara的前端学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/naruto.png',
    nav: [
      { text: 'HTML', link: '/HTML/' },
      { text: 'CSS', link: '/CSS/' },
      { text: 'Vue', link: '/Vue/' },
      { text: 'Webpack', link: '/Webpack/' },
      { text: 'Server', link: '/server/' },
      {
        text: 'Nodejs', items: [
          { text: 'nestjs', link: '/nestjs/' },
          { text: 'Webpack', link: '/Webpack/' },
        ]
      },

    ],

    sidebar: {
      '/HTML/index': autoSidebar('/HTML'),
      '/CSS/index': autoSidebar('/CSS'),
      '/Vue/index': autoSidebar('/Vue'),
      '/nodejs/index': autoSidebar('/nodejs'),
      '/Webpack/index': autoSidebar('/Webpack'),
      '/server/index': autoSidebar('/server'),
      '/nestjs/index': autoSidebar('/nestjs'),
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Gaara'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jahseh-bot' }
    ],

  }
})

