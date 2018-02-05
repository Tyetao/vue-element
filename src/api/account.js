import request from '@/utils/request'

export function getUsersList() {
  return request({
    url: '/usersList',
    method: 'get'
  })
}

export function removeAccount(id) {
  return request({
    url: '/removeAccount',
    method: 'get',
    params: { id }
  })
}
