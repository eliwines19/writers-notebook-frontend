export const fetchComments = () => {
    return dispatch => {
        dispatch({ type: 'COMMENTS_LOADING' })
        fetch('https://writers-notebook-backend.herokuapp.com/comments', { credentials: 'include' })
        .then(resp => resp.json())
        .then(json => {
            dispatch({
                type: 'COMMENTS_SUCCESS',
                payload: { comments: json.data }
            })
        })
    }
}

export const addComment = (comment) => {
    return dispatch => {
        fetch('https://writers-notebook-backend.herokuapp.com/comments', {
            credentials: 'include',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ comment: comment })
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({
                type: 'ADD_COMMENT',
                payload: { comment: json.data }
            })
        })
    }
}

export const deleteComment = id => {
    return dispatch => {
        fetch(`https://writers-notebook-backend.herokuapp.com/comments/${id}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ id: id })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'DELETE_COMMENT',
                payload: data
            })
        })
    }
}