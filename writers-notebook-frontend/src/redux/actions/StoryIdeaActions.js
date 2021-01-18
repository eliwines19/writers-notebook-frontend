export const fetchStoryIdeas = () => {
    return dispatch => {
        dispatch({ type: 'STORY_IDEAS_LOADING' })
        fetch('https://writers-notebook-backend.herokuapp.com/story_ideas', { credentials: 'include' })
        .then(resp => resp.json())
        .then(json => {
            dispatch({
                type: 'STORY_IDEAS_SUCCESS',
                payload: { storyIdeas: json.data }
            })
        })
    }
}

export const addStoryIdea = (story, history) => {
    return dispatch => {
        fetch('https://writers-notebook-backend.herokuapp.com/story_ideas', {
            credentials: 'include',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ story_idea: story })
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({ type: 'ADD_STORY_IDEA_SUCCESS', payload: { storyIdea: json.data } })
        })
        history.push('/');
    }
}

export const updateStoryIdea = (story, id, history) => {
    return dispatch => {
        fetch(`https://writers-notebook-backend.herokuapp.com/story_ideas/${id}`, {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ story_idea: story })
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch({ type: 'UPDATE_STORY_IDEA_SUCCESS', payload: { storyIdea: json.data }, history: history })
        })
    }
}

export const deleteStoryIdea = id => {
    return dispatch => {
        fetch(`https://writers-notebook-backend.herokuapp.com/story_ideas/${id}`, {
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
            dispatch({ type: 'DELETE_STORY_IDEA_SUCCESS', payload: data })
        })
    }
}