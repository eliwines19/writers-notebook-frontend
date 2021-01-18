import React from 'react';
import Characters from '../CharacterComponents/Characters';
import { connect } from 'react-redux';
import { deleteCharacter, updateCharacter } from '../../redux/actions/CharacterActions'

class CharacterContainer extends React.Component{

    render() {
        const { story, loaded, characters, deleteCharacter, currentUser, updateCharacter } = this.props;
        return (
            <div className="character-container">
                <Characters
                    characters={characters}
                    loaded={loaded} story={story}
                    deleteCharacter={deleteCharacter}
                    currentUser={currentUser}
                    updateCharacter={updateCharacter}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        loaded: state.characters.loaded,
        characters: state.characters.characters
    }
}

export default connect(mapStateToProps, { deleteCharacter , updateCharacter })(CharacterContainer);