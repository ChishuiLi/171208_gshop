module.exports = {
    devServer: {
        proxy: {
            '/api':{//匹配所有以'/api'开头的路径
                target:'http://localhost:4000',//代理目标的基础路径
                changeOrigin:true,
                pathRewrite:{'^/api': ''}
            }
        }
    },
    lintOnSave: false
}
