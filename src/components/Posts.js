import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }

        this.getData();
    }
    getData() {
        fetch("http://127.0.0.1:8000/api/posts")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    let pts = localStorage.setItem("ld-posts", JSON.stringify(data));
                    this.updateUI(data);
                });
            });
    }

    updateUI(data) {
        this.setState({
            posts: data
        })
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(item =>
                    <div>
                        <h2>{item.id}</h2>
                        <p>{item.title}</p>
                        <Link to={'/posts/' + item.id}><button className="btn btn-info">About</button></Link>
                        <hr />
                    </div>
                )}

            </div>
        )
    }
}
export default Posts;