import React from 'react';
import '../../stylesheets/StoryIdeas.css'
import CharacterContainer from '../containers/CharacterContainer';
import CommentContainer from '../containers/CommentContainer';
import { Link } from 'react-router-dom';

const StoryIdeas = ({ currentUser, stories, deleteStory, updateStory, history }) => {

    const renderButtons = (story) => {
        if(story.attributes.user_id === currentUser.id){
            return (
                <div className="user-buttons">
                    <button onClick={() => deleteStory(story.id, history)}>DELETE</button>
                    <button>
                        <Link to={
                            {pathname:'/update-story',
                            props:{
                                story, updateStory,
                            }}
                        }>UPDATE</Link>
                    </button>
                </div>
            )
        }
    }

    const renderStories = () => {
        return (
            stories.map(story => {
                return (
                    <div key={story.id} className="story-div">
                        {renderButtons(story)}
                        <h3 className="story-title">{story.attributes.name}</h3>
                        <span>created by {story.attributes.user.username}</span>
                        <div className="story-list">
                            <li>Setting:<br /><span>{story.attributes.setting}</span></li>
                            <li>Plot:<br /><span>{story.attributes.plot}</span></li>
                            <li>Conflict:<br /><span>{story.attributes.conflict}</span></li>
                            <li>Theme:<br /><span>{story.attributes.theme}</span></li>
                            <li>Point-of-View:<br /><span>{story.attributes.pov}</span></li>
                            <li>Tone:<br /><span>{story.attributes.tone}</span></li>
                            <li>Style:<br /><span>{story.attributes.style}</span></li>
                        </div>
                        <div className="characters-and-comments">
                            <CharacterContainer story={story}/>
                            <CommentContainer story={story}/>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        stories ?
        <div className="all-stories-div">
            <h2>All Stories</h2>{renderStories()}
        </div>
        : null
    )
}

export default StoryIdeas