import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn What",
  description: "A site show CS interview knowloage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: 'Programming',
        link: '/programming/sql',
        activeMatch: '/programming/' 
      },
      { 
        text: 'Blog',
        link: '/blog/index',
        activeMatch: '/blog/' 
      }
    ],

    sidebar:{
      '/programming/': { base: '/programming/', items: sidebarProgramming() },
      '/blog/': { base: '/programming/', items: sidebarBlog() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

function sidebarProgramming(){
  return[
      {
        text: 'Tool',
        collapsed: false,
        items: [
          { text: 'Helix', link: '/helix' },
          { text: 'Brower', link: '/brower' }
        ]
      },
      {
        text: 'Language',
        collapsed: false,
        items: [
          { text: 'Python', link: '/python' },
          { text: 'Typescript', link: '/typescript' },
          { text: 'SQL', link: '/sql' },
          { text: 'Docker', link:'/docker' }
        ]
      },
      {
        text: 'Auto Test',
        collapsed: false,
        items: [
          { text: 'Pytest', link: '/pytest' },
        ]
      }
    ]
}

function sidebarBlog(){
  return[
    {
      text: 'title',
      collapsed: false,
      items:[
        { text: 'ssfaf', link: '/sdfaf'}
    ]
    }
  ]
  
}
