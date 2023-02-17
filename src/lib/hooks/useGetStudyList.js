import { useDispatch, useSelector } from "react-redux";
import { getStudyCategory, getStudyList } from "../api/study";
import { useEffect } from "react";
import { studyListSuccess } from "../../modules/study";

const useGetStudyList = () => {
  const { listRes } = useSelector(({ study }) => ({
    listRes: study.listRes,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const handleStudyList = async () => {
      const response = await getStudyList();
      dispatch(studyListSuccess(response));
    };

    handleStudyList();
  }, [dispatch]);

  const handleStudyCategory = async (category) => {
    const response = await getStudyCategory(category);
    dispatch(studyListSuccess(response));
  };

  return { listRes, handleStudyCategory };
};

export default useGetStudyList;
