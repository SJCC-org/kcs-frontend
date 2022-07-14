import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddStudy from '../../components/main/AddStudy';
import { initailizeForm } from '../../modules/auth';
import {
  addStudyFailure,
  addStudySuccess,
  changeField,
} from '../../modules/study';
import axios from 'axios';
import { getCookie } from '../../lib/cookie';

function AddStudyContainer({ onOpenStudy }) {
  const { form, addRes } = useSelector(({ study }) => ({
    form: study.study,
    addRes: study.addRes,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'study',
        key: name,
        value,
      }),
    );
  };

  const onChangeCategory = (value) => {
    dispatch(
      changeField({
        form: 'study',
        key: 'studyCategory',
        value,
      }),
    );
  };

  const onAddStudy = () => {
    async function addStudy() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      const { title, description, schedule, howTo, studyCategory, maxNum } =
        form;
      try {
        const response = await axios.post(
          'https://api.kcs.zooneon.dev/v1/study',
          { title, description, schedule, howTo, studyCategory, maxNum },
        );
        dispatch(addStudySuccess(response.data.data));
      } catch (e) {
        dispatch(addStudyFailure(e));
      }
    }
    addStudy();
  };

  useEffect(() => {
    dispatch(initailizeForm('study'));
  }, [dispatch]);

  useEffect(() => {
    if (addRes) {
      window.location.replace('/');
    }
  }, [addRes]);

  return (
    <AddStudy
      form={form}
      addRes={addRes}
      onChange={onChange}
      onChangeCategory={onChangeCategory}
      onOpenStudy={onOpenStudy}
      onAddStudy={onAddStudy}
    />
  );
}

export default AddStudyContainer;
