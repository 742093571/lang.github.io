module.exports = {
    title: '红歌',
    description: '红歌的博客网站',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        {
          text: '红歌的博客',
          items: [
            { text: 'CSDN', link: 'https://www.csdn.net/' },
            {
              text: '掘金',
              link: 'https://juejin.cn/',
            },
          ],
        },
      ],
      sidebar: [
        {
          title: '网站介绍',
          path: '/',
        },
        {
          title: '学习文档',
          children: [
            { title: 'javascript', path: '/document/Javascript' },
            { title: 'node', path: '/document/Node' },
          ],
        },
      ],
    },
  };