const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
        transpileDependencies: true,
        devServer: {
            // overlay: {
            //     warnings: false,
            //     errors: false,
            // },
            proxy: {
                '/api': {
                    target: 'http://v.juhe.cn/calendar',
                    changeOrigin: true,
                    ws: true,
                    secure: false,
                    pathRewrite: {
                        '^/api': '',
                    },
                },
            },
        },
    lintOnSave: false,
    })