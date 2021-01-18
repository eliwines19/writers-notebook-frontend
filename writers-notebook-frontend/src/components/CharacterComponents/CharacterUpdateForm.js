import React from 'react';
import { Link } from 'react-router-dom';

class CharacterUpdateForm extends React.Component{

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
        if(!this.props.location.props){
            this.props.history.push('/')
        }else{
            const { currentUser, character, story } = this.props.location.props;
            const charAttr = character.attributes;
            this.setState({
                name: charAttr.name,
                biology: charAttr.biology,
                description: charAttr.description,
                story_idea_id: story.id,
                user_id: currentUser.id
            })
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

    allTrue = obj => {
        let formValues = Object.values(obj)
        let values = [];
        formValues.forEach(value => {
            if(!!value){
                values.push(value)
            }
        })
        if(values.length < formValues.length){return false}else{return true}
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.villain === this.state.hero){
            alert("Must Check One Box(hero or villain)")
        } else{
            const { updateCharacter, character } = this.props.location.props;
            updateCharacter(this.state, character.id, this.props.history)
        }
    }

    render(){
        if(!this.props.location.props){
            this.props.history.push('/')
            return null
        }else{
            const { story } = this.props.location.props;
            return(
                <div>
                    <Link to='/'>Back</Link>
                    <h2>Changing: {this.state.name}<br /> from the story: {story.attributes.name}</h2>
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
                    <button>Save Character</button>
                </form>
                </div>
            )            
        }
    }
}

export default CharacterUpdateForm