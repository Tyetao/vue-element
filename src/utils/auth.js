import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getName(name) {
  return Cookies.get('name', name)
}

export function setName(name) {
  return Cookies.set('name', name)
}
export function removeName(name) {
  return Cookies.remove('name', name)
}
