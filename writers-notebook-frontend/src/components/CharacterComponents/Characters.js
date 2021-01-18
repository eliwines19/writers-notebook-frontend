import React from 'react';
import '../../stylesheets/CharactersAndComments.css';
import { Link } from 'react-router-dom';

const Characters = ({ story, loaded, characters, currentUser, deleteCharacter, updateCharacter }) => {

    const renderButtons = (character) => {
        if(character.attributes.user_id === currentUser.id){
            return (
                <div className="user-buttons">
                    <button onClick={() => deleteCharacter(character.id)}>DELETE</button>
                    <button><Link
                        to={{
                            pathname:'/update-character',
                            props:{
                                currentUser: currentUser,
                                updateCharacter: updateCharacter,
                                character: character,
                                story: story
                            }
                        }}
                    >UPDATE</Link></button>
                </div>
            )
        }
    }

    const renderCharacters = () => {
        if(loaded === true){
            return (
                characters.map(character => {
                    const attributes = character.attributes;
                    if(attributes.story_idea_id == story.id){
                        return (
                            <div key={character.id} >
                                {renderButtons(character)}
                                <ul>
                                    <h4>Name: {attributes.name}</h4>
                                    <li>Biology: {attributes.biology}</li>
                                    {
                                        attributes.hero === true ?
                                        <li>{attributes.name} is a Hero!</li> :
                                        <li>{attributes.name} is a Villain!</li>
                                    }
                                    <li>Description: {attributes.description}</li>
                                </ul>
                            </div>
                        )
                    }else{
                        return null
                    }
                })
            )
        }else{
            return(<div>Loading Characters...</div>)
        }
    }

    return (
        story.attributes.characters ?
        <div className="characters-div">
            <h4>Characters for {story.attributes.name}</h4>
            {renderCharacters()}
        </div>
        : null
    )
}

export default Characters;