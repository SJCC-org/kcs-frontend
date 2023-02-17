import { useDispatch, useSelector } from "react-redux";
import { getStudyCategory, getStudyList } from "../api/study";
import { studyListSuccess } from "../../modules/study";

const useGetStudyList = () => {
  const { listRes } = useSelector(({ study }) => ({
    listRes: study.listRes,
  }));

  const dispatch = useDispatch();

  const handleStudyList = async () => {
    const response = await getStudyList();
    dispatch(studyListSuccess(response));
  };

  const handleStudyCategory = async (category) => {
    const response = await getStudyCategory(category);
    dispatch(studyListSuccess(response));
  };

  return { listRes, handleStudyList, handleStudyCategory };
};

export default useGetStudyList;
