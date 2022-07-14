import React, { useEffect } from 'react';
import EditCategory from '../../components/categories/EditCategory';
import { useDispatch, useSelector } from 'react-redux';
import {
  membershipWithdrawalFailure,
  membershipWithdrawalSuccess,
} from '../../modules/auth';
import { getCookie } from '../../lib/cookie';
import axios from 'axios';
function EditCategoryContainer() {
  const { withDrawalRes } = useSelector(({ auth }) => ({
    withDrawalRes: auth.withDrawalRes,
  }));
  const dispatch = useDispatch();

  async function withDrawal() {
    const accessToken = getCookie('myAToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    try {
      const response = await axios.delete(
        'https://api.kcs.zooneon.dev/v1/members',
      );
      dispatch(membershipWithdrawalSuccess(response.data));
    } catch (e) {
      dispatch(membershipWithdrawalFailure(e));
    }
  }
  const onWithDrawal = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('회원 탈퇴 하시겠습니까?') === true) {
      withDrawal();
    } else {
      return;
    }
  };

  useEffect(() => {
    if (withDrawalRes) {
      window.location.replace('/');
    }
  }, [withDrawalRes]);

  return <EditCategory onWithDrawal={onWithDrawal} />;
}

export default EditCategoryContainer;
