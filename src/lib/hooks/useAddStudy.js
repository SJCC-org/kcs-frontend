import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/study";
import { postAddStudy } from "../api/study";

export const useAddStudy = () => {
  const [category, setCategory] = useState("카테고리를 선택해주세요");
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { studyCategory } = useSelector(({ study }) => ({
    studyCategory: study.studyCategory,
  }));
  const dispatch = useDispatch();

  const handleChangeCategory = (value) => {
    dispatch(
      changeField({
        key: "studyCategory",
        value,
      })
    );
  };

  const handleChangeCategoryName = (name) => {
    setCategory(name);
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleAddStudy = async (
    title,
    description,
    schedule,
    howTo,
    maxNum
  ) => {
    const response = await postAddStudy(
      title,
      description,
      schedule,
      howTo,
      studyCategory,
      maxNum
    );

    if (response.status === "SUCCESS") {
      window.location.replace("/");
    }
  };

  return {
    handleChangeCategory,
    handleAddStudy,
    handleChangeCategoryName,
    setIsOpenDropDown,
    category,
    isOpenDropDown,
  };
};
