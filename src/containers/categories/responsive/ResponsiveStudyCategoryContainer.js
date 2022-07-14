import React from 'react';
import { useDispatch } from 'react-redux';
import ResponsiveStudyCategory from '../../../components/categories/responsive/ResponsiveStudyCategory';
import axios from 'axios';
import { StudyListFailure, studyListSuccess } from '../../../modules/study';

function ResponsiveStudyCategoryContainer({ onIsResponsiveOpen }) {
  const dispatch = useDispatch();

  const onGetCategory = () => {
    async function getCategory() {
      try {
        const response = await axios.get(
          `https://api.kcs.zooneon.dev/v1/study?page=0&size=20`,
        );
        dispatch(studyListSuccess(response.data.data));
      } catch (e) {
        dispatch(StudyListFailure(e));
      }
    }
    getCategory();
  };

  const onGetCategoryStudy = (category) => {
    async function getCategoryStudy() {
      try {
        const response = await axios.get(
          `https://api.kcs.zooneon.dev/v1/study?page=0&size=20&studyCategory=${category}`,
        );
        dispatch(studyListSuccess(response.data.data));
      } catch (e) {
        dispatch(StudyListFailure(e));
      }
    }

    getCategoryStudy();
  };
  return (
    <ResponsiveStudyCategory
      onIsResponsiveOpen={onIsResponsiveOpen}
      onGetCategoryStudy={onGetCategoryStudy}
      onGetCategory={onGetCategory}
    />
  );
}

export default ResponsiveStudyCategoryContainer;
