module.exports = {
  transpileDependencies: ['@vue/reactivity'],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/w7/' // testrwd 為 repo 名稱
    : '/'
}