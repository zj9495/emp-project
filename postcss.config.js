/*
 * @Author: yincheng
 * @Date: 2021-09-02 10:39:50
 * @LastEditors: yincheng
 * @LastEditTime: 2021-09-02 10:43:31
 */

module.exports = {
  plugins: {
    'postcss-import': {
      path: ['src/styles', 'src/styles/themes/']
    },
    // 'postcss-mixins': {
    //   mixins: postcssMixinColor
    // },
    // 'postcss-preset-env': {
    //   features: {
    //     'custom-properties': {
    //       preserve: true
    //     },
    //     'color-mod-function': true
    //   }
    // },
    'postcss-calc': {},
    'precss': {}
  }
}
