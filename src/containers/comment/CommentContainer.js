import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../../components/itemInfo/comment/Comment';
import {
  addRepiesCommentFailure,
  addRepliesCommentSuccess,
  changeField,
  initializeForm,
} from '../../modules/comment';
import axios from 'axios';

function CommentContainer({ comment, commentId }) {
  const { replies, addRepliesRes } = useSelector(({ comment }) => ({
    replies: comment.replies,
    addRepliesAdd: comment.addRepliesAdd,
  }));
  const dispatch = useDispatch();
  const { studyId } = useParams();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const onAddReplies = () => {
    async function addReplies() {
      try {
        const response = await axios.post(
          `https://api.kcs.zooneon.dev/v1/study/${studyId}/comment/${commentId}/reply`,
          {
            content: replies,
          },
        );
        dispatch(addRepliesCommentSuccess(response.data.data));
      } catch (e) {
        dispatch(addRepiesCommentFailure(e));
      }
    }

    addReplies();
  };

  useEffect(() => {
    dispatch(initializeForm('replies'));
  }, [dispatch]);

  useEffect(() => {
    if (addRepliesRes) {
      window.location.replace(`/study/info/${studyId}`);
    }
  }, [addRepliesRes, studyId]);

  return (
    <Comment
      comment={comment}
      replies={replies}
      onChange={onChange}
      onAddReplies={onAddReplies}
    />
  );
}

export default CommentContainer;
