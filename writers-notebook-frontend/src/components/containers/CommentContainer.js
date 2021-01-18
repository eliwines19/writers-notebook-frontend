import React from 'react';
import Comments from '../CommentComponents/Comments';
import CommentForm from '../CommentComponents/CommentForm';
import { addComment, deleteComment } from '../../redux/actions/CommentActions';
import { connect } from 'react-redux';

class CommentContainer extends React.Component{

    render() {
        const { story, loaded, comments, currentUser, addComment, deleteComment } = this.props;
        return (
            <div>
                <Comments
                    story={story}
                    loaded={loaded}
                    comments={comments}
                    currentUser={currentUser}
                    deleteComment={deleteComment}
                />
                <CommentForm
                    currentUser={currentUser}
                    story={story}
                    addComment={addComment}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loaded: state.comments.loaded,
        comments: state.comments.comments,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, {
    addComment: addComment,
    deleteComment: deleteComment
})(CommentContainer);