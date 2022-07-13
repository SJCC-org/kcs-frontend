import React from 'react';
import StudyCategory from '../../components/categories/StudyCategory';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { StudyListFailure, studyListSuccess } from '../../modules/study';

function StudyCategoryContainer({ onOpenStudy }) {
  const dispatch = useDispatch();

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
    <StudyCategory
      onOpenStudy={onOpenStudy}
      onGetCategoryStudy={onGetCategoryStudy}
    />
  );
}

export default StudyCategoryContainer;
