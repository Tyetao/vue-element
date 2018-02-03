import request from '@/utils/request'

export function getUsersList() {
  return request({
    url: '/usersList',
    method: 'get'
  })
}
