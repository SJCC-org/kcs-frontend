import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemInfoTemplete from '../../components/itemInfo/ItemInfoTemplete';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';
import { studyFailure, studySuccess } from '../../modules/study';

function ItemInfoContainer() {
  const { userRes, studyRes } = useSelector(({ user, study }) => ({
    studyRes: study.studyRes,
    userRes: user.userRes,
  }));
  const dispatch = useDispatch();
  const { studyId } = useParams();

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

  return <ItemInfoTemplete userRes={userRes} studyRes={studyRes} />;
}

export default ItemInfoContainer;
