export default (state = { loading: false, loggedIn: false, currentUser: {} }, action) => {
    switch(action.type){

        case 'AUTH_LOADING':
            return { 
                loading: true,
                loggedIn: false,
                currentUser: {...state.currentUser}
             }

        case 'AUTH_SUCCESS':
            return {
                ...state,
                loading: false,
                loggedIn: action.payload.loggedIn,
                currentUser: action.payload.currentUser
            }

        case 'LOGIN_LOADING':
            return {
                loading: true,
                loggedIn: false,
                currentUser: {...state.currentUser}
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                loggedIn: action.payload.loggedIn,
                currentUser: action.payload.currentUser
            }

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: action.payload.currentUser
            }

        default:
            return state;
    }
}