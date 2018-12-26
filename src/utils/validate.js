export default {
  // 判断是否为空
  checkIsNull (str) {
    var reg = /^\s*$/g
    return reg.test(str)
  },
  // 判断手机号是否正确
  checkMobile (str) {
    var reg = /^[1][3456789]\d{9}$/
    return reg.test(str)
  }
}
