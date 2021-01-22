import React from 'react';
import PropTypes from "prop-types";

const Comment = ({ comment }) => {
const { text, user } = comment;

  return (
    <>
      <h3>{user}</h3>
      <p>{text}</p>
    </>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }),
}

export default Comment;
