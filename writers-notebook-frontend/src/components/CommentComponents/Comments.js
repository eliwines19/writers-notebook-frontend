import React from 'react';

const Comments = ({ story, currentUser, comments, deleteComment }) => {

    const renderButtons = (comment) => {
        if(comment.attributes.user_id === currentUser.id || story.attributes.user_id === currentUser.id){
            return (
                <button onClick={() => deleteComment(comment.id)}>DELETE</button>
            )
        }
    }

    const renderComments = () => {
        return (
            comments.map(comment => {
                const comAttr = comment.attributes;
                if(comAttr.story_idea_id == story.id){
                    return (
                        <div key={comment.id}>
                            <span>{comAttr.user.username}</span>
                            <ul>
                                <li>
                                    {comAttr.text}
                                    {renderButtons(comment)}
                                </li>
                            </ul>
                        </div>
                    )
                }
            })
        )
    }

    return (
        story.attributes.comments ?
        <div className="comments-div">
            <h5>Comments for {story.attributes.name}</h5>{renderComments()}
        </div>
        : null
    )
}

export default Comments