import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './Posts/NewPost/NewPost';
import FullPost from './Posts/FullPost/FullPost';
class Blog extends Component {
    
    state = {
        auth: false,
    }

    componentDidMount() {
        console.log(this.props);
    }

    render () {
        return (
            <div className ="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                to = "/posts" 
                                exact
                                // activeClassName="my-active"
                                >Home</NavLink>                                
                            </li>
                            <li>
                                <NavLink to = {{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=ture'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path = "/" exact render = {() => <h1>Home</h1>}/>
                    <Route path = "/" render = {() => <h1>Home2</h1>}/>*/}
                <Switch>
                    {this.state.auth? <Route path = "/new-post" component = {NewPost}/>: null} 
                    <Route path = "/posts" component = {Posts}/>
                    <Route render = {() => <h1>Not found</h1>}/>
                    {/**<Redirect from = "/" to = "/posts" /> */} 
                </Switch>
            </div>
        );
    }
}

export default Blog;