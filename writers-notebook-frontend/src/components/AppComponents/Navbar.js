import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../stylesheets/buttonsAndLinks.css';

class Navbar extends React.Component{
    
    checkForAuth = () => {
        if(Object.keys(this.props).length === 0){
            return(
                <div className="navbar">
                    <ul>
                        <button><NavLink to="/signup">SIGN-UP</NavLink></button>
                        <button><NavLink to="/login">LOG-IN</NavLink></button>
                    </ul>
                </div>
            )
        }else{
            return(
                <div className="navbar">
                    <ul>
                        <button>
                            <Link to={{
                                pathname:'/new-story',
                                props:{
                                    currentUser: this.props.currentUser,
                                    addStory: this.props.addStory
                                }
                            }}>New Story</Link>
                        </button>

                        <button>
                            <Link to={{
                                pathname:'/new-character',
                                props:{
                                    stories: this.props.stories,
                                    currentUser: this.props.currentUser,
                                    addCharacter: this.props.addCharacter
                                }
                            }}>New Character</Link>
                        </button>
                    </ul>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.checkForAuth()}
            </div>
        )
    }
}

export default Navbar