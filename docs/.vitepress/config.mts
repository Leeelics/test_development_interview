import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Learn What",
  description: "A site show CS interview knowloage",
  head:[
    ['link', {rel: 'icon', href: '/learnwhat1.svg'}]
  ],
  themeConfig: {
    logo: '/learnwhat1.svg',
    nav: [
      { 
        text: 'Computer Science',
        link: '/programming/index',
        activeMatch: '/learn/' 
      },
      { 
        text: 'Experience',
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
          { text: 'Brower', link: '/brower' },
          { text: 'Helix', link: '/helix' },
          { text: 'Tmux', link: '/tmux' },
          { text: 'Vim', link: '/vim' },
        ]
      },
      {
        text: 'Interview',
        collapsed: false,
        items: [
          { text: 'Algrithems', link: '/algrithems' },
          { text: 'CI/CD', link: '/cicd' },
          { text: 'Cpp', link: '/cpp' },
          { text: 'Docker', link:'/docker' },
          { text: 'Git', link: '/git' },
          { text: 'Python', link: '/python' },
          { text: 'SQL', link: '/sql' },
          { text: 'Typescript', link: '/typescript' },
        ]
      },
      {
        text: 'Project',
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
