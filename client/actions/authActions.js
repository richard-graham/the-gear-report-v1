import { getFirebase } from "react-redux-firebase";

export const signIn = (creds) => {
  return (dispatch, getState, { getFIrebase }) => {
    const firebase = getFirebase()

    firebase.auth().signInWithUserNameAndPassword(
      creds.email,
      creds.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
} 