import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MainItem from '../../components/main/MainItem';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';
import { studyFailure, studySuccess } from '../../modules/study';

function MainItemContainer() {
  const { studyRes } = useSelector(({ study }) => ({
    studyRes: study.studyRes,
  }));
  const dispatch = useDispatch();
  const { studyId } = useParams();

  useEffect(() => {
    async function getStudy() {
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
    getStudy();
  }, [dispatch, studyId]);

  return <MainItem studyRes={studyRes} />;
}

export default MainItemContainer;
