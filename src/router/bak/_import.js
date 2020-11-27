/* 引入组件写法 */
module.exports = file => () => import('@/views/' + file)
