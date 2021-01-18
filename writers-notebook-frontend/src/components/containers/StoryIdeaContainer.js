import React from 'react';
import Navbar from '../AppComponents/Navbar';
import { fetchStoryIdeas, addStoryIdea, deleteStoryIdea, updateStoryIdea } from '../../redux/actions/StoryIdeaActions';
import { connect } from 'react-redux';
import StoryIdeas from '../StoryIdeaComponents/StoryIdeas';
import { fetchCharacters, addCharacter } from '../../redux/actions/CharacterActions';
import { fetchComments } from '../../redux/actions/CommentActions';

class StoryIdeaContainer extends React.Component{

    componentDidMount(){
        this.props.getStories();
        this.props.getComments();
        this.props.getCharacters();
    }

    render() {
        return (
            <div>
                <Navbar
                    currentUser={this.props.currentUser}
                    addStory={this.props.addStory}
                    stories={this.props.stories}
                    addCharacter={this.props.addCharacter}
                />

                <StoryIdeas
                    currentUser={this.props.currentUser}
                    stories={this.props.stories}
                    deleteStory={this.props.deleteStory}
                    updateStory={this.props.updateStory}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        stories: state.stories.storyIdeas,
    }
}

export default connect(
    mapStateToProps,
    {
        getStories: fetchStoryIdeas,
        addStory: addStoryIdea,
        getCharacters: fetchCharacters,
        addCharacter: addCharacter,
        deleteStory: deleteStoryIdea,
        updateStory: updateStoryIdea,
        getComments: fetchComments
    }
    )(StoryIdeaContainer); 