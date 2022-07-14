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

function AddStudyContainer({ onOpenStudy, onIsResponsiveOpen }) {
  const { title, description, schedule, howTo, studyCategory, maxNum, addRes } =
    useSelector(({ study }) => ({
      title: study.title,
      description: study.description,
      schedule: study.schedule,
      howTo: study.howTo,
      studyCategory: study.studyCategory,
      maxNum: study.maxNum,
      addRes: study.addRes,
    }));
  const dispatch = useDispatch();

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

  const onAddStudy = () => {
    async function addStudy() {
      const accessToken = getCookie('myAToken');
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
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
      title={title}
      description={description}
      schedule={schedule}
      howTo={howTo}
      studyCategory={studyCategory}
      maxNum={maxNum}
      addRes={addRes}
      onChange={onChange}
      onChangeCategory={onChangeCategory}
      onOpenStudy={onOpenStudy}
      onAddStudy={onAddStudy}
      onIsResponsiveOpen={onIsResponsiveOpen}
    />
  );
}

export default AddStudyContainer;
