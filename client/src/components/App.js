import React from "react";
import "./App.css";
import data from "../lib/comments";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

class App extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.setState({ comments: data });
  }

  render() {
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <NewCommentForm />
      </div>
    );
  }
}

export default App;

// App
//  CommentsList
//    CommentThread
//      Comment
//  NewCommentForm
