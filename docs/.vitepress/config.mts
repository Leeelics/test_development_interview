import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Learn What",
  description: "A site show CS interview knowloage",
  themeConfig: {
    nav: [
      { 
        text: '知识',
        link: '/programming/index',
        activeMatch: '/learn/' 
      },
      { 
        text: '博客',
        link: '/blog/index',
        activeMatch: '/blog/' 
      }
    ],

    sidebar:{
      '/programming/': { base: '/programming/', items: sidebarProgramming() },
      '/blog/': { base: '/blog/', items: sidebarBlog() }
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
        { text: '学习英语', link: '/learnEnglish' },
    ]
    }
  ]
  
}
