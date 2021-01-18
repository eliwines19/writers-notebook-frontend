import React from 'react';
import { Link } from 'react-router-dom';

class CharacterForm extends React.Component{

    constructor(){
        super();
        this.state = {
            name: '',
            biology: '',
            hero: false,
            villain: false,
            description: '',
            story_idea_id: 0,
            user_id: 0
        }
    }

    componentDidMount(){
        const { history, location } = this.props;
        if(!location.props){
            history.push('/')
        }else{
            const { currentUser, stories } = this.props.location.props;

            let usersStories = stories.filter(story => story.attributes.user_id === currentUser.id)
            if(usersStories.length === 0){
                alert("You must first create a story to create a character")
                history.push('/')
            }else{
                this.setState({
                    story_idea_id: stories[0].id,
                    user_id: currentUser.id
                })
            }
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheck = e => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.villain === this.state.hero){
            alert("Must Check One Box(hero or villain)")
        } else{
            const { addCharacter } = this.props.location.props;
            addCharacter(this.state, this.props.history)
        }
    }

    renderSelectMenu = () => {
        if(!this.props.location.props){
            this.props.history.push('/')
        }else{
            const { stories, currentUser } = this.props.location.props;
            const usersStories = stories.filter(story => story.attributes.user_id === currentUser.id)
    
            return (
                <select name="story_idea_id" onChange={this.handleChange} value={this.state.story_idea_id} >
                    {
                        usersStories.map(story => {
                            return (
                                <option key={story.id} value={story.id}>{story.attributes.name}</option>
                            )
                        })
                    }
                </select>
            )
        }
    }

    render() {
        return (
            <div className="new-story-div">
                <Link to='/'>Back</Link>
                <h3>New Character</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name of Character:</label>
                    <textarea
                        type="text"
                        name="name"
                        rows="2"
                        cols="15"
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></textarea>
                    <br />
                    <label>Biology(human, animal, alien, etc.):</label>
                    <textarea
                        type="text"
                        name="biology"
                        rows="4"
                        cols="15"
                        value={this.state.biology}
                        placeholder="human, animal, alien, etc..."
                        onChange={this.handleChange}
                    ></textarea>
                    <br />
                    <label>Hero?</label>
                    <input
                        type="checkbox"
                        name="hero"
                        value={this.state.hero}
                        onChange={this.handleCheck}
                    />
                    <label>Villain?</label>
                    <input
                        type="checkbox"
                        name="villain"
                        value={this.state.villain}
                        onChange={this.handleCheck}
                    />
                    <br />
                    <label>Description:</label>
                    <textarea
                        type="text"
                        name="description"
                        rows="6"
                        cols="20"
                        value={this.state.description}
                        onChange={this.handleChange}
                    ></textarea>
                    <br />
                    <label>Which story does this character belong to?</label>
                    {this.renderSelectMenu()}
                    <br />
                    <button>Save Character</button>
                </form>
            </div>
        )
    }
}

export default CharacterForm