import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../../components/itemInfo/comment/Comment';
import {
  addRepiesCommentFailure,
  addRepliesCommentSuccess,
  deleteRepiesCommentFailure,
  deleteRepliesCommentSuccess,
  initializeForm,
} from '../../modules/comment';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';

function CommentContainer({ comment }) {
  const { userRes, addRepliesRes, deleteRepliesRes } = useSelector(
    ({ user, comment }) => ({
      userRes: user.userRes,
      addRepliesRes: comment.addRepliesRes,
      deleteRepliesRes: comment.deleteRepliesRes,
    }),
  );
  const [replies, setReplies] = useState('');
  const dispatch = useDispatch();
  const { studyId } = useParams();

  const onChange = (e) => {
    setReplies(e.target.value);
  };

  async function deleteReplies(commentId) {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.delete(
        `https://api.kcs.zooneon.dev/v1/study/${studyId}/comment/${commentId}`,
      );
      dispatch(deleteRepliesCommentSuccess(response.data.data));
    } catch (e) {
      dispatch(deleteRepiesCommentFailure(e));
    }
  }

  const onDeleteReplies = (commentId) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('댓글을 삭제하시겠습니까?') === true) {
      deleteReplies(commentId);
    } else {
      return;
    }
  };

  const onAddReplies = (commentId) => {
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

  useEffect(() => {
    if (deleteRepliesRes) {
      window.location.replace(`/study/info/${studyId}`);
    }
  }, [deleteRepliesRes, studyId]);

  return (
    <Comment
      comment={comment}
      userRes={userRes}
      replies={replies}
      onChange={onChange}
      onAddReplies={onAddReplies}
      onDeleteReplies={onDeleteReplies}
    />
  );
}

export default CommentContainer;
