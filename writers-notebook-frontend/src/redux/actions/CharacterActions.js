export const fetchCharacters = () => {
    return dispatch => {
        dispatch({ type: 'CHARACTERS_LOADING' })
        fetch('https://writers-notebook-backend.herokuapp.com/characters', { credentials: 'include' })
        .then(resp => resp.json())
        .then(json => {
            dispatch({
                type: 'CHARACTERS_SUCCESS',
                payload: { characters: json.data }
            })
        })
    }
}

export const addCharacter = (character, history) => {
    return dispatch => {
        fetch('https://writers-notebook-backend.herokuapp.com/characters', {
            credentials: 'include',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ character: character })
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({ type: 'ADD_CHARACTER_SUCCESS', payload: { character: json.data } })
        })
        history.push('/');
    }
}

export const updateCharacter = (character, id, history) => {
    return dispatch => {
        fetch(`https://writers-notebook-backend.herokuapp.com/characters/${id}`, {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ character: character})
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({ type: 'UPDATE_CHARACTER_SUCCESS', payload: { character: json.data } })
        })
        history.push('/')
    }
}

export const deleteCharacter = id => {
    return dispatch => {
        fetch(`https://writers-notebook-backend.herokuapp.com/characters/${id}`, {
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
            dispatch({ type: 'DELETE_CHARACTER_SUCCESS', payload: data })
        })
    }
}