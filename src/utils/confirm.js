export default {
  /**
   * @param {String} title 提示的标题
   * @param {String} content  提示的内容
   * @param {Function} success 调用成功回调
   * @param {String} showCancel 是否显示取消按钮
   */
  show(title = '', content = '', success = function() {}, showCancel = true) {
    wx.showModal({
      title,
      content,
      showCancel,
      cancelColor: '#999999',
      confirmColor: '#a43632',
      success(res) {
        if (res.confirm) {
          success()
        }
      }
    })
  }
}
