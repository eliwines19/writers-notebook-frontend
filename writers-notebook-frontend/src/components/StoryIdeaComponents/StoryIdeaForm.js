import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/forms.css';

class StoryIdeaForm extends React.Component{

    constructor() {
        super();
        this.state = {
            name: '',
            setting: '',
            plot: '',
            conflict: '',
            theme: '',
            pov: '',
            tone: '',
            style: '',
        }
    }

    componentDidMount(){
        if(!this.props.location.props){
            this.props.history.push('/')
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
        const { currentUser, addStory } = this.props.location.props;

        if (this.allTrue(this.state) === true){
            addStory({ ...this.state, user_id: currentUser.id }, this.props.history)
        } else{
            alert("All fields must be filled out")
        }
    }

    render() {
        return (
            <div className="new-story-div">
                <Link to='/'>Back</Link>
                <h3>New Story Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>What is the name of your story?</label>
                    <textarea type="text" name="name" rows="2" cols="20" value={this.state.name} onChange={this.handleChange}></textarea>
                    <br />
                    <label>What is the setting of your story?</label>
                    <textarea type="text" name="setting" rows="4" cols="40" value={this.state.setting} onChange={this.handleChange}></textarea>
                    <br />
                    <label>What is the plot of your story?</label>
                    <textarea type="text" name="plot" rows="6" cols="50" value={this.state.plot} onChange={this.handleChange}></textarea>
                    <br />
                    <label>What is the main conflict of your story?</label>
                    <textarea type="text" name="conflict" rows="5" cols="50" value={this.state.conflict} onChange={this.handleChange}></textarea>
                    <br />
                    <label>What is the theme of your story?</label>
                    <textarea type="text" name="theme" rows="2" cols="20" value={this.state.theme} onChange={this.handleChange}></textarea>
                    <br />
                    <label>From whos point of view will the story be told?</label>
                    <textarea type="text" name="pov" rows="2" cols="20" value={this.state.pov} onChange={this.handleChange}></textarea>
                    <br />
                    <label>What is the tone of your story?</label>
                    <textarea type="text" name="tone" rows="2" cols="20" value={this.state.tone} onChange={this.handleChange}></textarea>
                    <br />
                    <label>What is the style of your story?</label>
                    <textarea type="text" name="style" rows="2" cols="20" value={this.state.style} onChange={this.handleChange}></textarea>
                    <br />
                    <button>Save Story</button>
                </form>
            </div>
        )
    }
}

export default StoryIdeaForm