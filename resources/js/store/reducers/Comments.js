
import * as ActionTypes from '../action-types'

const initialState ={
    data:[],
    error:'',
    comments:null,
    loading:false
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
                comments:state.action.payload,
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
                return{
                    ...state,
                comments:state.comments.filter(comment =>comment.id !==action.payload)
        
                }
        default:
            state;
    }
}