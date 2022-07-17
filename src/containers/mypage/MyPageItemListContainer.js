import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyPageItemList from '../../components/mypage/MyPageItemList';
import { getCookie } from '../../lib/cookie';
import { userStudyListFailure, userStudyListSuccess } from '../../modules/user';
function MyPageItemListContainer() {
  const { userRes, listRes } = useSelector(({ user }) => ({
    userRes: user.userRes,
    listRes: user.listRes,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserList() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get(
          'https://api.kcs.zooneon.dev/v1/members/study',
        );
        dispatch(userStudyListSuccess(response.data.data));
      } catch (e) {
        dispatch(userStudyListFailure(e));
      }
    }

    getUserList();
  }, [dispatch]);

  return <MyPageItemList userRes={userRes} listRes={listRes} />;
}

export default MyPageItemListContainer;
