import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn What",
  description: "A site show CS interview knowloage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: 'Learn',
        link: '/learn/sql',
        activeMatch: '/learn/' 
      },
      { 
        text: 'What',
        link: '/what/index',
        activeMatch: '/what/' 
      }
    ],

    sidebar:{
      '/Learn/': { base: '/programming/', items: sidebarProgramming() },
      '/Knowagle/': { base: '/blog/', items: sidebarBlog() }
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
          { text: 'Brower', link: '/brower' },
          { text: 'Tmux', link: '/tmux' }
        ]
      },
      {
        text: 'Language',
        collapsed: false,
        items: [
          { text: 'Python', link: '/python' },
          { text: 'Typescript', link: '/typescript' },
          { text: 'SQL', link: '/sql' },
          { text: 'Git', link: '/git' },
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
      text: 'Life Log',
      collapsed: false,
      items:[
        { text: '构建vitepress', link: '/vitepress'},
        { text: '沮丧坟墓', link: '/grave25depression' },
        { text: '重学AI', link: '/return2ai' },
    ]
    }
  ]
  
}
