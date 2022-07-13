import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainItemList from '../../components/main/MainItemList';
import { StudyListFailure, studyListSuccess } from '../../modules/study';
import axios from 'axios';

function MainItemListContainer() {
  const { userRes, listRes } = useSelector(({ user, study }) => ({
    userRes: study.userRes,
    listRes: study.listRes,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    async function getStudyList() {
      try {
        const response = await axios.get(
          'https://api.kcs.zooneon.dev/v1/study?page=0&size=20',
        );
        dispatch(studyListSuccess(response.data.data));
      } catch (e) {
        dispatch(StudyListFailure(e));
      }
    }
    getStudyList();
  }, [dispatch]);

  return <MainItemList userRes={userRes} listRes={listRes} />;
}

export default MainItemListContainer;
