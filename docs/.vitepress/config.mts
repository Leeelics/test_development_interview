import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn What",
  description: "A site show CS interview knowloage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tool', link: '/helix' },
      { text: 'Language', link: '/sql' }
    ],

    sidebar: [
      {
        text: 'Tool',
        items: [
          { text: 'Helix', link: '/helix' },
          { text: 'Docker', link: '/docker' }
        ]
      },
      {
        text: 'Language',
        items: [
          { text: 'Python', link: '/python' },
          { text: 'Typescript', link: '/typescript' },
          { text: 'SQL', link: '/sql' }
        ]
      },
      {
        text: 'Auto Test',
        items: [
          { text: 'Pytest', link: '/pytest' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
