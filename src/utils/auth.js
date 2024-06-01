import { getCookie } from '@/app/axios/CookieConfig'

export const isAuthenticated = () => {
  const token = getCookie('access_token')
  // Dummy authentication check
  // Replace this with real authentication logic

  if (token) {
    return true
  }
  return false
}

// export const login = (access_token) => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('access_token', access_token)
//   }
// }

// export const logout = () => {
//   if (typeof window !== 'undefined') {
//     localStorage.removeItem('access_token')
//   }
// }
