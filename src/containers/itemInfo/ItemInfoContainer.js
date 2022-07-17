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
  recruitEndStudyFailure,
  recruitEndStudySuccess,
  studyFailure,
  studySuccess,
  withDrawalStudyFailure,
  withDrawalStudySuccess,
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
  const {
    userRes,
    studyRes,
    commentRes,
    comment,
    addRes,
    withDrawalRes,
    recruitRes,
    deleteRes,
    enterRes,
  } = useSelector(({ user, study, comment }) => ({
    studyRes: study.studyRes,
    withDrawalRes: study.withDrawalRes,
    recruitRes: study.recruitRes,
    deleteRes: study.deleteRes,
    enterRes: study.enterRes,
    userRes: user.userRes,
    commentRes: comment.commentRes,
    comment: comment.comment,
    addRes: comment.addRes,
  }));
  const dispatch = useDispatch();
  const { studyId } = useParams();

  async function withDrawalStudy() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    try {
      const response = await axios.patch(
        `https://api.kcs.zooneon.dev/v1/study/${studyId}/withdraw`,
      );
      dispatch(withDrawalStudySuccess(response.data.data));
    } catch (e) {
      dispatch(withDrawalStudyFailure(e));
    }
  }

  const onWithDrawalStudy = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('스터디에서 탈퇴하시겠습니까?') === true) {
      withDrawalStudy();
    } else {
      return;
    }
  };

  async function recruitStudy() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.patch(
        `https://api.kcs.zooneon.dev/v1/study/${studyId}/recruit?recruitCompleted=true`,
      );
      dispatch(recruitEndStudySuccess(response.data.data));
    } catch (e) {
      dispatch(recruitEndStudyFailure(e));
    }
  }

  async function recruitOpenStudy() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.patch(
        `https://api.kcs.zooneon.dev/v1/study/${studyId}/recruit?recruitCompleted=false`,
      );
      dispatch(recruitEndStudySuccess(response.data.data));
    } catch (e) {
      dispatch(recruitEndStudyFailure(e));
    }
  }

  const onRecruitStudy = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('스터디를 마감하시겠습니까?') === true) {
      recruitStudy();
    } else {
      return;
    }
  };

  const onRecruitOpenStudy = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('스터디를 다시 오픈하시겠습니까?') === true) {
      recruitOpenStudy();
    } else {
      return;
    }
  };

  async function deleteStudy() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.delete(
        `https://api.kcs.zooneon.dev/v1/study/${studyId}`,
      );
      dispatch(deleteStudySuccess(response.data));
    } catch (e) {
      dispatch(deleteStudyFailure(e));
    }
  }

  const onDeleteStudy = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('스터디를 삭제하시겠습니까?') === true) {
      deleteStudy();
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

  useEffect(() => {
    if (withDrawalRes) {
      window.location.replace(`/study/info/${studyId}`);
    }
  }, [withDrawalRes, studyId]);

  useEffect(() => {
    if (recruitRes) {
      window.location.replace(`/study/info/${studyId}`);
    }
  }, [recruitRes, studyId]);

  useEffect(() => {
    if (deleteRes) {
      window.location.replace('/');
    }
  }, [deleteRes]);

  useEffect(() => {
    if (enterRes) {
      window.location.replace(`/study/info/${studyId}`);
    }
  }, [enterRes, studyId]);

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
      onRecruitStudy={onRecruitStudy}
      onRecruitOpenStudy={onRecruitOpenStudy}
      onWithDrawalStudy={onWithDrawalStudy}
    />
  );
}

export default ItemInfoContainer;
