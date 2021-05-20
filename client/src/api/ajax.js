import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET') {
      promise = axios.get(url, {
        params: data
      })
    } else if (type === 'POST'){
      promise = axios.post(url, data)
    } else {
      promise = axios.delete(url, {data: data})
    }
    promise.then(response => {
      resolve(response.data)

    }).catch(error => {

      message.error('请求出错了: ' + error.message)
    })
  })


}





