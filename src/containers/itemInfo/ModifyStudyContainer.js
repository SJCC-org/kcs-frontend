import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ModifyStudy from '../../components/itemInfo/ModifyStudy';
import {
  changeField,
  setOriginalStudy,
  studyModifyFailure,
  studyModifySuccess,
} from '../../modules/study';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';

function ModifyStudyContainer({ onOpenModify }) {
  const {
    title,
    description,
    schedule,
    howTo,
    studyCategory,
    maxNum,
    studyRes,
    recruitCompleted,
    modifyRes,
  } = useSelector(({ study }) => ({
    studyRes: study.studyRes,
    title: study.title,
    description: study.description,
    schedule: study.schedule,
    howTo: study.howTo,
    studyCategory: study.studyCategory,
    maxNum: study.maxNum,
    recruitCompleted: study.recruitCompleted,
    modifyRes: study.modifyRes,
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

  const onChangeCategory = (value) => {
    dispatch(
      changeField({
        key: 'studyCategory',
        value,
      }),
    );
  };

  const onModifyStudy = () => {
    async function modifyStudy() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        const response = await axios.patch(
          `https://api.kcs.zooneon.dev/v1/study/${studyId}`,
          {
            title,
            description,
            schedule,
            howTo,
            studyCategory,
            maxNum,
            studyRes,
            recruitCompleted,
          },
        );
        dispatch(studyModifySuccess(response.data.data));
      } catch (e) {
        dispatch(studyModifyFailure(e));
      }
    }
    modifyStudy();
  };

  useEffect(() => {
    if (modifyRes) {
      window.location.replace(`/study/info/${studyId}`);
    }
  }, [modifyRes, studyId]);

  useEffect(() => {
    dispatch(setOriginalStudy(studyRes));
  }, [dispatch, studyRes]);

  return (
    <ModifyStudy
      title={title}
      description={description}
      howTo={howTo}
      studyCategory={studyCategory}
      maxNum={maxNum}
      schedule={schedule}
      onChange={onChange}
      onModifyStudy={onModifyStudy}
      onChangeCategory={onChangeCategory}
      onOpenModify={onOpenModify}
    />
  );
}

export default ModifyStudyContainer;
