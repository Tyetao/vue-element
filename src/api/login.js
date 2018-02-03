import request from '@/utils/request'

export function login(name, password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      name,
      password
    }
  })
}

export function getInfo(name) {
  return request({
    url: '/userInfo',
    method: 'get',
    params: { name }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
