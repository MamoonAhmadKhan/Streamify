import React from 'react'
import Comment from './Comment';

const CommentsList = (props) => {
    const { comments } = props;

  return comments.map((comment, index) => (
    <div className='mt-5 bg-neutral-800 p-2 rounded-xl shadow w-full' key={index}>
        <Comment data={comment} />
        <div className='ml-3 pl-5 border-l-1'>
            <CommentsList comments={comment.replies} />
        </div>
    </div>
  ));
}

export default CommentsList