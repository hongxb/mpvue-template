export default {
  text (str, success = function() {}) {
    setTimeout(() => {
      wx.showToast({
        title: str,
        icon: 'none',
        success
      })
    }, 300)
  },
  success (str, success = function() {}) {
    // str: 限制7个字符
    setTimeout(() => {
      wx.showToast({
        title: str,
        success
      })
    }, 300)
  }
}