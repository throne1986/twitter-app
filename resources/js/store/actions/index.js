import * as ActionTypes from '../action-types';
import axios from '../../Http';

export function authLogin(payload) {
  return {
    type: ActionTypes.AUTH_LOGIN,
    payload,
  };
}

export function authLogout() {
  return {
    type: ActionTypes.AUTH_LOGOUT,
  };
}

export function authCheck() {
  return {
    type: ActionTypes.AUTH_CHECK,
  };
}

// actions creators for users
export function fetchUserRequest(){
  return{
    type: ActionTypes.FETCH_USER_REQUEST,
  }
}
export function fetchUserSucces(){
  return{
    type: ActionTypes.FETCH_USER_SUCCES,
    payload:comments   
  }
}
export function fetchUserFailure(){
  return{
    type: ActionTypes.FETCH_USER_FAILURE,
    payload:error
  }
}

// actions creators for comments
export const addComments = data =>{
  return{
    type:ActionTypes.ADD_COMMENTS,
    payload:data
  }
}
export const editUser = id =>{
  return{
    type: ActionTypes.EDIT_COMMENTS,
    payload:id
  }
}

export const deleteUser = id =>{
  return{
    type: ActionTypes.DELETE_COMMENTS,
    payload:id
  }
}

// retriev comments
export const fetchComments=(dispatch) =>{

  return dispatch =>{
    dispatch(fetchCommentsRequest);
    axios.get('api/v1/todo')
    .then(response =>{
      const comments =response.data;
      console.log(comments)
      dispatch(fetchCommentsSucces(comments))
    })
    .catch(error =>{
      const erroMsg =errors.messages
      console.log(erroMsg);
      dispatch(fetchCommentsFailure(error))
    })
  }
}

//adding comments
export const addNewComments = data =>{
  return dispatch =>{
    dispatch()
    axios.post('api/v1/todo')
    .then(response =>{
      dispatch(addComments(data))
    })
    .catch(error =>{
      const erroMsg =error.message
      dispatch(fetchCommentsFailure(erroMsg))
    })
    
  }
}

// update comments
export const updateComments = data =>{
  return dispatch =>{
    dispatch(fetchCommentsRequest)
    axios.put(`api/v1/todo/${data.id}`)
    .then(response =>{
      const comments =response.data
      console.log("comments:", comments)
      dispatch(editComments(data.id))
    })
    .catch(error =>{
      const erroMsg =error.message;
      dispatch(fetchCommentsFailure(erroMsg))
    })
  }
}

// delete comments

export const deleteUser = id =>{
  return dispatch =>{
    axios.delete(`api/v1/todo/${id}`)
    .then(response =>{
      dispatch(deleteUser(id))
    })
    .catch(error =>{
      const erroMsg =error.message;
      dispatch(fetchCommentsFailure(erroMsg))
    })
  }
}