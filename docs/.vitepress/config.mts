import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ZouYu Blog",
    description: "个人博客记录！",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Golang', link: '/golang/'}
        ],

        sidebar: {
            "/golang/": [
                {
                    text: "Golang 博客",
                    items: [
                        {text: "标准库", link: "/golang/std_library/"},
                        {text: "第三方库", link: "/golang/library/"},
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

    },
})
