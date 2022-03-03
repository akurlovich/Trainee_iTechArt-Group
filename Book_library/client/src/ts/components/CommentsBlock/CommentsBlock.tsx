import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Comment } from '../Comment/Comment';
import { Loader } from '../UI/Loader/Loader';
import { addComment, getAllCommentByBookID, getComments } from '../../store/reducers/CommentReducer/CommentActionCreators';
import './commentsblock.scss';

const CommentsBlockInner:FC = () => {
  const { user } = useAppSelector(state => state.authReducer);
  const { commentsByBookID, isLoading, comments } = useAppSelector(state => state.commentReducer);
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const {bookID} = useParams();

  useEffect(() => {
    (async () => {
      if (bookID) {
        // console.log('object');
        await dispatch(getAllCommentByBookID(bookID));
      }
    })()
  }, [])
  

  const commentHandler = async () => {
    if (bookID) {
      await dispatch(addComment({bookID: bookID, userID: user.id, comment: text}));
      await dispatch(getAllCommentByBookID(bookID));
    }
    setText('');
  }

  return (
    <div className="comments">
      {isLoading && <Loader/>}
      <div className="comments__title">
        Comments:
      </div>
      {/* {comments.length && comments[0].comment}
      {commentsByBookID.length && commentsByBookID[0].comment} */}
      {commentsByBookID.length ? commentsByBookID.map(item => 
        <Comment key={item._id} comment={item} user={item.userID} bookID={bookID}/>) : null}
      
      <div className="comments__add">
        <div className="comments__add__block">
          <div className="comments__add__title">
            Leave comment:
          </div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="comments__add__input"/>
        </div>
        <div
          onClick={commentHandler} 
          className="comments__add__button">
          Send comment
        </div>
      </div>
    </div>
  );
};

export const CommentsBlock = React.memo(CommentsBlockInner);
