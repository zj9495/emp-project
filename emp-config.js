/*
 * @Author: yincheng
 * @Date: 2021-09-02 11:32:17
 * @LastEditors: yincheng
 * @LastEditTime: 2021-09-02 11:32:17
 */
const withVue2 = require('@efox/emp-vue2')
module.exports = withVue2(({config}) => {
  const projectName = 'vue2Base'
  const port = 8009
  config.output.publicPath(`http://localhost:${port}/`)
  config.devServer.port(port)
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'emp.js',
        exposes: {
        },
        // shared: ['vue/dist/vue.esm.js'],
      },
    }
    return args
  })

  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'EMP Vue2 Base',
      },
    }
    return args
  })
})