import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { sendRequest, status, data: loadedComment } = useHttp(getAllComments);
  const { quotesId } = param;
  useEffect(() => {
    sendRequest(quotesId)
  }, [quotesId, sendRequest])

  let comments;

  const addedCommentHandler = useCallback(() => {
    sendRequest(quotesId)
  }, [sendRequest, quotesId])

  if (status === 'pending') {
    comments = <div className='centered'>
      <LoadingSpinner />
    </div>
  }
  if (status === 'completed' && loadedComment && loadedComment.length > 0) {
    comments = <CommentsList comments={loadedComment} />
  }

  if (status === 'completed' && !loadedComment && loadedComment.length === 0) {
    comments = <p className='centered'>No Comments Yet!!</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quotesId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
