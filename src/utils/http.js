// 封装request请求
import { host } from './config'
import $loading from './loading'
import $toast from './toast'

function request(url, method, data) {
  $loading.show()

  let baseURL = host
  if ((url.indexOf('http://') > -1) || (url.indexOf('https://') > -1)) {
    baseURL = ''
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      method,
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          $toast.text('服务器开小差了，请稍后再试')
          reject(false)
        }
      },
      fail: function (error) {
        console.log(error)
        $toast.text('您的网络好像不太给力，请稍后再试')
        reject(false)
      },
      complete: function () {
        $loading.hide()
      }
    })
  })
}

export function get(url, data) {
  return request(url, 'GET', data)
}

export function post(url, data) {
  return request(url, 'POST', data)
}
