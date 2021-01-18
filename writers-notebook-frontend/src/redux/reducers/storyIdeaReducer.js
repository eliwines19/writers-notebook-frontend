export default (state = { loaded: false, storyIdeas: [] }, action) => {
    switch(action.type){

        case 'STORY_IDEAS_LOADING':
            return {
                ...state,
                loaded: false,
                storyIdeas: [ ...state.storyIdeas ]
            }

        case 'STORY_IDEAS_SUCCESS':
            return {
                ...state,
                loaded: true,
                storyIdeas: action.payload.storyIdeas
            }

        case 'ADD_STORY_IDEA_SUCCESS':
            let newListOfStories = [ action.payload.storyIdea, ...state.storyIdeas ]
            return {
                loaded: true,
                storyIdeas: newListOfStories
            }

        case 'UPDATE_STORY_IDEA_SUCCESS':
            let updatedStories = state.storyIdeas.filter(story => story.id !== action.payload.storyIdea.id)
            return {
                loaded: true,
                storyIdeas: [ action.payload.storyIdea, ...updatedStories ]
            }

        case 'DELETE_STORY_IDEA_SUCCESS':
            return {
                loaded: true,
                storyIdeas: state.storyIdeas.filter(story => story.id !== action.payload.id)
            }

        default: 
            return state;
    }
}