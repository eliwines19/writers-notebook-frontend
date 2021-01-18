import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './components/AppComponents/Title';
import Signup from './components/AppComponents/Signup';
import Login from './components/AppComponents/Login';
import StoryIdeaForm from './components/StoryIdeaComponents/StoryIdeaForm';
import StoryIdeaUpdateForm from './components/StoryIdeaComponents/StoryIdeaUpdateForm';
import CharacterForm from './components/CharacterComponents/CharacterForm';
import CharacterUpdateForm from './components/CharacterComponents/CharacterUpdateForm';
import { loggedIn } from './redux/actions/authActions';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    this.props.loggedIn()
  }

  render() {
    return (
      <div className="App">
        <Router>
            <Route path='/' component={Title}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route path='/new-story' component={StoryIdeaForm}/>
            <Route exact path='/update-story' component={StoryIdeaUpdateForm} />
            <Route exact path='/new-character' component={CharacterForm}/>
            <Route exact path='/update-character' component={CharacterUpdateForm}/>
        </Router>
      </div>
    )
  }
}

export default connect(null, { loggedIn: loggedIn })(App);
