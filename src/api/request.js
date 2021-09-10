import axios from 'axios'

const baseUrl = 'http://localhost:3000/';
// 设置请求实例
// 一个promise生成的对象
const instance = axios.create({
    baseUrl,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

export default function request(options) {
    let params = {
        url: baseUrl+options.url,
        method: options.method,
        data: options.data
    }
    return new Promise((resolve,reject) => {
        instance(params).then(res => {
            (res && res.data && res.status === 200) ? resolve(res.data) : resolve(null)
        }).catch(error => {
            reject(error)
        })
    })
}
