import React from 'react';

class CommentForm extends React.Component{

    state = {
        text: ''
    }

    componentDidMount(){
        const { currentUser, story } = this.props;
        this.setState({
            story_idea_id: story.id,
            user_id: currentUser.id
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    allTrue = (obj) => {
        for(let key in obj){
            if(!obj[key]) return false;
            return true;
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.allTrue(this.state) === true){
            const { addComment } = this.props;
            addComment(this.state);
            this.setState({text: ''});
        }else{
            alert("Cannot post blank comment")
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text" size="80" value={this.state.text} onChange={this.handleChange} placeholder="Leave a comment.."/>
                    <button>Leave Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentForm