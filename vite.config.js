// export default {
//     server:{
//         proxy: {
//             '/api': {
//                 target: 'http://127.0.0.1:9000',
//                 changeOrigin: true,
//                 rewrite: (path) => path.replace(/^\/api/, '')
//             }
//         },
//         cors: true
//     }
// }

const path = require('path')

module.exports = {
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    },
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:9000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '/api')
        }
    },
    alias: {
        '/@/': path.resolve(__dirname, './src')
    }
}