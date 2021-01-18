export default ( state = { loaded: false, characters: [] }, action ) => {
    switch(action.type){

        case 'CHARACTERS_LOADING':
            return state;

        case 'CHARACTERS_SUCCESS':
            return {
                loaded: true,
                characters: action.payload.characters
            }

        case 'ADD_CHARACTER_SUCCESS':
            return {
                loaded: true,
                characters: [ action.payload.character, ...state.characters ]
            }

        case 'DELETE_CHARACTER_SUCCESS':
            return {
                loaded: true,
                characters: state.characters.filter(character => character.id !== action.payload.id)
            }

        case 'UPDATE_CHARACTER_SUCCESS':
            let updatedCharacters = state.characters.filter(character => character.id !== action.payload.character.id)
            return {
                loaded: true,
                characters: [ action.payload.character, ...updatedCharacters ]
            }

        default:
            return state;
    }
}