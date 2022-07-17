import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemInfoTemplete from '../../components/itemInfo/ItemInfoTemplete';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';
import {
  deleteStudyFailure,
  deleteStudySuccess,
  enterStudyFailure,
  enterStudySuccess,
  studyFailure,
  studySuccess,
} from '../../modules/study';
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

  async function deleteStudy() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.delete(
        `https://api.kcs.zooneon.dev/v1/study/${studyId}`,
      );
      dispatch(deleteStudySuccess(response.data.data));
    } catch (e) {
      dispatch(deleteStudyFailure(e));
    }
  }

  const onDeleteStudy = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('스터디를 삭제하시겠습니까?') === true) {
      deleteStudy();
      window.location.replace('/');
    } else {
      return;
    }
  };

  async function enterStudy() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.patch(
        `https://api.kcs.zooneon.dev/v1/study/${studyId}/enter`,
      );
      dispatch(enterStudySuccess(response.data.data));
    } catch (e) {
      dispatch(enterStudyFailure(e));
    }
  }

  const onEnterStudy = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('스터디에 참여하시겠습니까?') === true) {
      enterStudy();
      window.location.replace(`/study/info/${studyId}`);
    } else {
      return;
    }
  };

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
      onDeleteStudy={onDeleteStudy}
      onEnterStudy={onEnterStudy}
    />
  );
}

export default ItemInfoContainer;
