import React from 'react';
import '../../stylesheets/title.css';
import Navbar from './Navbar';
import { connect } from 'react-redux'; 
import { logout } from '../../redux/actions/authActions';
import StoryIdeaContainer from '../containers/StoryIdeaContainer';

class Title extends React.Component {

    handleLogout = (e) => {
        this.props.logoutAction(this.props.history)
    }

    checkPathName = () => {
        const pathnames = ['/new-story', '/update-story', '/new-character', '/update-character'];
        const currentPath = [];
        pathnames.forEach(path => {
            if(this.props.location.pathname === path) { currentPath.push(path) }
        })
        if(currentPath.length > 0){
            return true
        }else{
            return false
        }
    }

    checkForAuth = () => {
        const { currentUser } = this.props;
        if(currentUser.id === undefined){
            return (<Navbar />)
        }else{
            return (
                <div>
                    <h2>
                        Welcome, {this.props.currentUser.username}
                        <button onClick={this.handleLogout}>LOGOUT</button>
                    </h2>
                    {
                        this.checkPathName() ? true : <StoryIdeaContainer />
                    }
                </div>
            )
        }
    }

    render() {
        return (
            <div className="Title-div">
                <h1>Writers Notebook</h1>
                {this.checkForAuth()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { logoutAction: logout })(Title);