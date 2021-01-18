export const signup = (user, history) => {
    return dispatch => {
        dispatch({ type: 'AUTH_LOADING' })
        fetch('https://writers-notebook-backend.herokuapp.com/users', {
            credentials: 'include',
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'AUTH_SUCCESS',
                payload: { loggedIn: data.logged_in, currentUser: { id: data.user.id, username: data.user.username } }
            })
        })
        history.push('/');
    }
}

export const login = (user, history) => {
    return dispatch => {
        dispatch({ type: 'LOGIN_LOADING' })
        fetch('https://writers-notebook-backend.herokuapp.com/sessions', {
            credentials: 'include',
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: user })
        })
        .then(resp => resp.json())
        .then(data => {
            if(!!data.message){
                alert(`${data.message}`)
                history.push('/signup')
            }else{
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: { loggedIn: data.logged_in, currentUser: { id: data.user.id, username: data.user.username } }
                })
                history.push('/')
            }
        })
    }
}

export const logout = (history) => {
    return dispatch => {
        fetch('https://writers-notebook-backend.herokuapp.com/sessions/logout', {
            credentials: 'include',
            mode: 'cors'
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'LOGOUT_SUCCESS',
            payload: { currentUser: data.user }
        }))
        history.push('/');
    }
}

export const loggedIn = () => {
    return dispatch => {
        dispatch({ type: 'LOGIN_LOADING' })
        fetch('https://writers-notebook-backend.herokuapp.com/sessions/logged_in', {
            credentials: 'include',
            mode: 'cors'
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { loggedIn: data.loggedIn, currentUser: { id: data.user.id, username: data.user.username } }
            })
        })
    }
}