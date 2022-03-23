import React, { FC, useEffect, useState } from 'react';
import { FcCancel } from 'react-icons/fc';
import { ADMIN_ROLE, DEFAULT_COMMENT } from '../../constants/user';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import UserService from '../../services/UserService';
import { getAllCommentByBookID, updateCommentByModerator } from '../../store/reducers/CommentReducer/CommentActionCreators';
import { ICommentResponse } from '../../types/ICommentResponse';
import './comment.scss';

interface IProps {
  comment?: ICommentResponse,
  user: string,
  bookID?: string,
}

const CommentInner:FC<IProps> = ({comment, user, bookID}) => {
  const { role } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const [userEmail, setUserEmail] = useState('');

  const canselHandler = async () => {
    if (comment?._id) {
      await dispatch(updateCommentByModerator({id: comment?._id, comment: DEFAULT_COMMENT}));
    }
    if (bookID) {
      await dispatch(getAllCommentByBookID(bookID));
    }
  };

  useEffect(() => {
    (async () => {
      const userById = await UserService.getUserByID(user);
      setUserEmail(userById.data.email)
    })();
  }, [])
  

  return (
    <div className="comments__item">
      <div className="comments__user">
        {userEmail}
      </div>
      <div className="comments__text">
        {comment?.comment}
        <div
          onClick={canselHandler}
          className="comments__text_delete">
          {role === ADMIN_ROLE && <FcCancel size={60}/>}
        </div>
      </div>
    </div>
  );
};

export const Comment = React.memo(CommentInner);