import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = Object.values(comments).map((comment) => {
    let content;

    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'rejected':
        content = 'Comment disabled by moderation';
        break;
      default: 
        content = 'This comment is awaiting moderation'
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments} </ul>;
};

export default CommentList;
