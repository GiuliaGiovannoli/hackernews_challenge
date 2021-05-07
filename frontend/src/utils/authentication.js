
export const tokenInLocalStorage = (data) => {
  localStorage.setItem('keyUser', data.token)
  localStorage.setItem('idUser', data.user._id)
  localStorage.setItem('logInStatus', true)
}

