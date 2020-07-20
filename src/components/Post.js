import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Post extends Component {
    constructor() {
        super();
    }
    render() {
        let id = this.props.match.params.id;
        let pos = JSON.parse(localStorage.getItem("ld-posts"));
        let oldItem = pos.find((element) => element.id == id);
        return (
            <div className="card">
                <img src={"/img/" + oldItem.image} width={50} height={50} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{oldItem.title}</h4>
                    <p className="card-text">Content: {oldItem.content}</p>
                </div>
            </div>
        )
    }
}
export default withRouter(Post);