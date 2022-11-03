
const getUserToken = () => {
    return localStorage.getItem('token')
}

const setUserToken = (token) => {
  localStorage.setItem('token', token)
}

const clearUserToken = () => {
  localStorage.removeItem('token')
}

export {getUserToken,setUserToken, clearUserToken}

