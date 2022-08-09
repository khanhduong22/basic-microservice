import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {

    if (comment.status === 'Pending') comment.content = 'Pending'
    if (comment.status === 'reject') comment.content = 'reject'

    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
