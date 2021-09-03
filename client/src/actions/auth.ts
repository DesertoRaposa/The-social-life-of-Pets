import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
// import jwtDecode from 'jwt-decode';
import {
  SignUpData,
  AuthAction,
  // SignInData,
  // SET_CURRENT_USER,
  // User
}
  from './types';
// import setAuthToken from '../utils/setAuthToken';
import { RootState } from '../store';

export const register = (userData: SignUpData): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    await axios.post('/api/auth/register', userData)
      .then(() => {
        console.log('ok ok ok')
      })
      .catch(function (error) {
        console.log('error');
      })
  }
}

// export const login = (userData: SignInData) => (dispatch: any) => {
//   axios
//     .post('/api/auth/login', userData)
//     .then((res) => {
//       const { token } = res.data
//       localStorage.setItem('access_token', token) //чтобы не вводить пароль после перезагрузки
//       setAuthToken(token) //установить токен в axios
//       const decoded = jwtDecode(token) //извлекаем из токена id name email
//       dispatch(setCurrentUser(decoded))
//     })
// }
//
// export const logout = () => (dispatch: any) => {
//   localStorage.removeItem('access_token') //удаляем токен из LS
//   setAuthToken(false) //из axios
//   dispatch(setCurrentUser({})) // из стора
// }
//
// export const setCurrentUser = (user: unknown) => ({
//   type: SET_CURRENT_USER,
//   payload: user
// })

