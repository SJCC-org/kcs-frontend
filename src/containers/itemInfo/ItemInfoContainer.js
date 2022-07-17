import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemInfoTemplete from '../../components/itemInfo/ItemInfoTemplete';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';
import { studyFailure, studySuccess } from '../../modules/study';
import {
  addCommentFailure,
  addCommentSuccess,
  changeField,
  commentFailure,
  commentSuccess,
  initializeForm,
} from '../../modules/comment';

function ItemInfoContainer() {
  const { userRes, studyRes, commentRes, comment, addRes } = useSelector(
    ({ user, study, comment }) => ({
      studyRes: study.studyRes,
      userRes: user.userRes,
      commentRes: comment.commentRes,
      comment: comment.comment,
      addRes: comment.addRes,
    }),
  );
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

  useEffect(() => {
    dispatch(initializeForm('comment'));
  }, [dispatch]);

  useEffect(() => {
    async function getStudyInfo() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        const response = await axios.get(
          `https://api.kcs.zooneon.dev/v1/study/${studyId}`,
        );
        dispatch(studySuccess(response.data.data));
      } catch (e) {
        dispatch(studyFailure(e));
      }
    }
    getStudyInfo();
  }, [dispatch, studyId]);

  useEffect(() => {
    async function getComment() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        const response = await axios.get(
          `https://api.kcs.zooneon.dev/v1/study/${studyId}/comment`,
        );
        dispatch(commentSuccess(response.data.data));
      } catch (e) {
        dispatch(commentFailure(e));
      }
    }
    getComment();
  }, [dispatch, studyId]);

  const onAddComment = () => {
    async function addComment() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        const response = await axios.post(
          `https://api.kcs.zooneon.dev/v1/study/${studyId}/comment`,
          { content: comment },
        );
        dispatch(addCommentSuccess(response.data.data));
      } catch (e) {
        dispatch(addCommentFailure(e));
      }
    }
    addComment();
  };

  useEffect(() => {
    if (addRes) {
      window.location.replace(`/study/info/${studyId}`);
    }
  }, [addRes, studyId]);

  return (
    <ItemInfoTemplete
      userRes={userRes}
      studyRes={studyRes}
      commentRes={commentRes}
      onAddComment={onAddComment}
      onChange={onChange}
      comment={comment}
    />
  );
}

export default ItemInfoContainer;
