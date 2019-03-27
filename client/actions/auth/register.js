import request from 'superagent'

import {loginError, receiveLogin} from '../auth/login'
import { saveUserToken } from '../../authUtilities/auth'

export function registerUser(creds){
  return dispatch => {
    return request.post(`/api/v1/register`, creds)
    .then(res => {
      const userInfo = saveUserToken(res.body.token);
      userInfo.name = creds.name
      userInfo.picture = creds.picture
      
      dispatch(receiveLogin(userInfo)); 
      document.location = "/dashboard/1"
    })
    .catch(err => {
      dispatch(loginError(err.response.body.message))
    })
  }
}