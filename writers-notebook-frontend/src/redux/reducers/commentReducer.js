export default ( state = { loaded: false, comments: [] } , action ) => {
    switch(action.type){

        case 'COMMENTS_LOADING':
            return state;

        case 'COMMENTS_SUCCESS':
            return {
                loaded: true,
                comments: action.payload.comments
            }

        case 'ADD_COMMENT':
            return {
                loaded: true,
                comments: [ ...state.comments, action.payload.comment ]
            }

        case 'DELETE_COMMENT':
            let newComments = state.comments.filter(comment => comment.id != action.payload.id)
            return {
                loaded: true,
                comments: newComments
            }

        default: 
            return state;
    }
}