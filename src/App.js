import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';
import AddPost from './components/AddPost';


class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/add-post">New post</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/add-post" exact>
            <AddPost />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* exact de co the vo ddc trang post */}
          <Route path="/posts" exact>
            <Posts />
          </Route>
          <Route path={"/posts/:id"}>
            <Post />
          </Route>       
        </Switch>
      </Router>
    )
  }
}

export default App;
