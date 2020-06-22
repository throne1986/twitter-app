import * as ActionTypes from '../action-types';
import axios from 'axios';

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
  console.log('success')
  return{
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload:user  
  }
}
export function fetchUserFailure(){
  return{
    type: ActionTypes.FETCH_USER_FAILURE,
    payload:error
  }
}


// actions creators for  comments
export function fetchCommentsRequest(){
  return{
    type: ActionTypes.FETCH_COMMENTS_REQUEST,
  }
}
export function fetchCommentsSucces(){
  console.log('success')
  return{
    type: ActionTypes.FETCH_COMMENTS_SUCCESS,
    payload:user  
  }
}
export function fetchCommentsFailure(){
  return{
    type: ActionTypes.FETCH_COMMENTS_FAILURE,
    payload:error
  }
}

// actions creators for comments
export const addComment = data =>{
  return{
    type:ActionTypes.ADD_COMMENTS,
    payload:data
  }
}
export const editComment= id =>{
  return{
    type: ActionTypes.EDIT_COMMENTS,
    payload:id
  }
}

export const removeComment = id =>{
  return{
    type: ActionTypes.DELETE_COMMENTS,
    payload:id
  }
}

// retriev comments
export const fetchComments= () =>{
console.log('Fetching data from api')
  return dispatch =>{
    dispatch(fetchCommentsRequest);
    axios.get('/api/v1/todo')
    .then(response =>{
      const comments =response.data;
      console.log("comments from api", comments);
      dispatch(fetchCommentsSucces(comments))
    })
    .catch(error =>{
      const erroMsg =errors.messages
      console.log(erroMsg);
      dispatch(fetchCommentsFailure(error))
    })
  }
}

export const loadData =(dispatch) => { // needs to dispatch, so it is first argument
  return axios.get('/api/v1/todo')
    .then(response =>{
      const comments =response.data
      console.log("data from api", comments)
    })
    .then(
      data => dispatch(fetchUserSucces),
      err => dispatch(fetchCommentsFailure)
    );
}
//adding comments
export const addNewComment = data =>{
  return dispatch =>{
    dispatch()
    axios.post('/api/v1/todo')
    .then(response =>{
      dispatch(addComment(data))
    })
    .catch(error =>{
      const erroMsg =error.message
      dispatch(fetchCommentsFailure(erroMsg))
    })
    
  }
}

// update comments
export const updateComment = data =>{
  return dispatch =>{
    dispatch(fetchCommentsRequest)
    axios.put(`/api/v1/todo/${data.id}`)
    .then(response =>{
      const comments =response.data
      console.log("comments:", comments)
      dispatch(editComment(data.id))
    })
    .catch(error =>{
      const erroMsg =error.message;
      dispatch(fetchCommentsFailure(erroMsg))
    })
  }
}

// delete comments

export const deleteComment = id =>{
  return dispatch =>{
    axios.delete(`/api/v1/todo/${id}`)
    .then(response =>{
      dispatch(deleteComment(id))
    })
    .catch(error =>{
      const erroMsg =error.message;
      dispatch(fetchCommentsFailure(erroMsg))
    })
  }
}