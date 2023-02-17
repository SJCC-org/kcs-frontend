import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { CATEGORY_LIST } from "../../constants/category";
import { useForm } from "react-hook-form";
import { STUDY_MIN_NUM } from "../../constants/addStudy";
import { useAddStudy } from "../../lib/hooks/useAddStudy";

const AddStudy = ({ onOpenStudy }) => {
  const {
    handleChangeCategory,
    handleAddStudy,
    handleChangeCategoryName,
    setIsOpenDropDown,
    category,
    isOpenDropDown,
  } = useAddStudy();

  const { register, watch } = useForm();

  const { title, description, schedule, howTo, maxNum } = watch();

  return (
    <AddStudyBlock>
      <div className="closeBlock">
        <AiOutlineClose onClick={onOpenStudy} />
      </div>
      <StudyCategory>
        <span>카테고리</span>
        <div className="wholeCategory">
          <div
            className="categoryBlock"
            onClick={() => setIsOpenDropDown((prev) => !prev)}
          >
            <span>{category}</span>
            {isOpenDropDown === true ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
          {isOpenDropDown && (
            <div className="subCategory">
              <ul>
                {CATEGORY_LIST.map(({ id, ko, en }) => (
                  <li
                    key={id}
                    onClick={() => {
                      handleChangeCategory(en);
                      handleChangeCategoryName(ko);
                    }}
                  >
                    {ko}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </StudyCategory>
      <StudyInfo>
        <StyledInput
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title", { required: true })}
        />
        <StyledTextArea
          placeholder="스터디를 설명해주세요"
          {...register("description", { required: true })}
        />
      </StudyInfo>
      <StudySchedule>
        <span>스터디 일정</span>
        <StyledInput
          type="text"
          {...register("schedule", { required: true })}
        />
      </StudySchedule>
      <StudyHowTo>
        <span>스터디 방식</span>
        <StyledInput type="text" {...register("howTo", { required: true })} />
      </StudyHowTo>
      <StudyMaxNum>
        <span>정원</span>
        <StyledInput
          type="number"
          min={STUDY_MIN_NUM}
          max={STUDY_MIN_NUM}
          {...register("maxNum", { required: true })}
        />
      </StudyMaxNum>
      <div className="buttonWrapper">
        <button
          type="submit"
          onClick={() =>
            handleAddStudy(title, description, schedule, howTo, maxNum)
          }
        >
          개설하기
        </button>
      </div>
    </AddStudyBlock>
  );
};

export default AddStudy;

const AddStudyBlock = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.016);
  padding: 1rem;
  border-radius: 7px;
  margin-bottom: 1rem;

  .closeBlock {
    width: 100%;
    text-align: right;
    padding: 1rem 1rem 0 0;

    svg {
      cursor: pointer;
      font-size: 20px;
    }
  }

  .buttonWrapper {
    width: 100%;
    padding-top: 1rem;
    text-align: right;

    button {
      background-color: ${palette.yellow[0]};
      border: none;
      padding: 0.5rem 0.7rem;
      border-radius: 7px;
      color: ${palette.brown[0]};
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      @media (max-width: 460px) {
        padding: 0.5rem 0.7rem;
        font-size: 16px;
      }
    }
  }
`;

const StudyCategory = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-bottom: 0.5rem;
    }
  }
  span {
    margin-right: 1rem;
  }

  .wholeCategory {
    width: 80%;
    @media (max-width: 425px) {
      width: 100%;
    }
    .categoryBlock {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem;
      border-radius: 7px;
      border: 1px solid ${palette.gray[1]};

      svg {
        width: 25px;
        height: 25px;
      }
    }
    .subCategory {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 7px;
      border: 1px solid ${palette.gray[1]};
      margin-top: 0.5rem;

      ul {
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          width: 100%;
          padding: 0.7rem;
          border-bottom: 1px solid ${palette.gray[1]};
          cursor: pointer;

          &:hover {
            border: 1px solid ${palette.yellow[0]};
            color: ${palette.brown[0]};
            font-weight: bold;
          }
        }
      }
    }
  }
`;
const StudySchedule = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-bottom: 0.5rem;
    }
  }

  span {
    margin-right: 1rem;
  }
`;
const StudyHowTo = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-bottom: 0.5rem;
    }
  }

  span {
    margin-right: 1rem;
  }
`;
const StudyMaxNum = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-bottom: 0.5rem;
    }
  }

  span {
    margin-right: 1rem;
  }

  input[type="number"] {
    width: 20%;
  }
`;
const StudyInfo = styled.form`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 1rem;
  display: flex;
  flex-direction: column;

  span {
    margin-right: 1rem;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  width: 80%;
  outline: none;
  padding: 0.7rem;
  border-radius: 7px;
  border: 1px solid ${palette.gray[1]};

  @media (max-width: 425px) {
    width: 100%;
  }

  &:focus {
    border: 2px solid ${palette.yellow[0]};
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 0.7rem;
  border-radius: 7px;
  border: 1px solid ${palette.gray[1]};
  resize: none;
  height: 200px;

  &:focus {
    border: 2px solid ${palette.yellow[0]};
  }
`;
