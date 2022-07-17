import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModifyComment from '../../components/itemInfo/comment/ModifyComment';
import {
  changeField,
  initializeForm,
  modifyRepiesCommentFailure,
  modifyRepliesCommentSuccess,
} from '../../modules/comment';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../lib/cookie';

function ModifyCommentContainer({ onIsModify, commentId }) {
  const { modifyReplies } = useSelector(({ comment }) => ({
    modifyReplies: comment.modifyReplies,
    modifyRepliesRes: comment.modifyRepliesRes,
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

  const onModifyReplies = (commentIdx) => {
    async function modifyReplies() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.patch(
          `https://api.kcs.zooneon.dev/v1/study/${studyId}/comment/${commentIdx}`,
          {
            content: modifyReplies,
          },
        );
        console.log(commentIdx);
        dispatch(modifyRepliesCommentSuccess(response.data.data));
      } catch (e) {
        dispatch(modifyRepiesCommentFailure(e));
      }
    }
    modifyReplies();
  };

  useEffect(() => {
    dispatch(initializeForm('modifyReplies'));
  }, [dispatch]);

  //   useEffect(() => {
  //     if (modifyRepliesRes) {
  //       window.location.replace(`/study/info/${studyId}`);
  //     }
  //   }, [modifyRepliesRes, studyId]);

  return (
    <ModifyComment
      modifyReplies={modifyReplies}
      onChange={onChange}
      onModifyReplies={onModifyReplies}
      onIsModify={onIsModify}
      commentIdx={commentId}
    />
  );
}

export default ModifyCommentContainer;
