
import * as ActionTypes from '../action-types'

const initialState ={
    data:[],
    error:'',
    comments:[],
    loading:false,
    editing:false
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_COMMENTS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case ActionTypes.FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                comments:action.payload,
                error:''
            }
        case ActionTypes.FETCH_COMMENTS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case ActionTypes.ADD_COMMENTS:
            return{
                ...state,
              comments:state.comments.concat(action.payload)
            }
            
        case ActionTypes.DELETE_COMMENTS:
            console.log('acc',action)
                return{
                    ...state,
                    comments: state.comments.filter(comment =>comment.id !==action.payload)
        
                }
                console.log('acc0', ddddd);
        case ActionTypes.EDIT_COMMENTS:
            return{
                 ...state,
                 comments: state.comments.map(comment =>comment.id === action.payload?{
                     
                     ...comment,
                     editing:!editing
                 }:comment)
            }
            default: // need this for default case
                    return state 
    }
}
export default reducer