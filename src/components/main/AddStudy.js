import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlineClose } from 'react-icons/ai';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

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
        cursor: pointer;
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

  input[type='number'] {
    width: 20%;
  }
`;
const StudyInfo = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 1rem;
  display: flex;
  flex-direction: column;

  span {
    margin-right: 1rem;
  }

  input[type='text'] {
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

  &:focus {
    border: 2px solid ${palette.yellow[0]};
  }
`;
function AddStudy({
  form,
  onChange,
  onChangeCategory,
  onOpenStudy,
  onAddStudy,
  onIsResponsiveOpen,
}) {
  const [category, setCategory] = useState('카테고리를 선택해주세요');
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const onChangeCategoryName = (name) => {
    setCategory(name);
    setIsOpenDropDown(!isOpenDropDown);
  };
  return (
    <AddStudyBlock>
      <div className="closeBlock">
        <AiOutlineClose
          onClick={() => {
            onOpenStudy();
            onIsResponsiveOpen();
          }}
        />
      </div>
      <StudyCategory>
        <span>카테고리</span>
        <div className="wholeCategory">
          <div className="categoryBlock">
            <span>{category}</span>
            {isOpenDropDown === true ? (
              <MdArrowDropUp
                onClick={() => setIsOpenDropDown(!isOpenDropDown)}
              />
            ) : (
              <MdArrowDropDown
                onClick={() => setIsOpenDropDown(!isOpenDropDown)}
              />
            )}
          </div>
          {isOpenDropDown && (
            <div className="subCategory">
              <ul>
                <li
                  onClick={() => {
                    onChangeCategory('ALGORITHM');
                    onChangeCategoryName('알고리즘');
                  }}
                >
                  알고리즘
                </li>
                <li
                  onClick={() => {
                    onChangeCategory('CERTIFICATE');
                    onChangeCategoryName('자격증');
                  }}
                >
                  자격증
                </li>
                <li
                  onClick={() => {
                    onChangeCategory('CLASS_REVIEW');
                    onChangeCategoryName('수업복습');
                  }}
                >
                  수업복습
                </li>
                <li
                  onClick={() => {
                    onChangeCategory('PROJECT');
                    onChangeCategoryName('프로젝트');
                  }}
                >
                  프로젝트
                </li>
                <li
                  onClick={() => {
                    onChangeCategory('CS');
                    onChangeCategoryName('CS');
                  }}
                >
                  CS
                </li>
                <li
                  onClick={() => {
                    onChangeCategory('ETC');
                    onChangeCategoryName('기타');
                  }}
                >
                  기타
                </li>
              </ul>
            </div>
          )}
        </div>
      </StudyCategory>
      <StudySchedule>
        <span>스터디 일정</span>
        <StyledInput
          type="text"
          name="schedule"
          value={form.schedule}
          onChange={onChange}
        />
      </StudySchedule>
      <StudyHowTo>
        <span>스터디 방식</span>
        <StyledInput
          type="text"
          name="howTo"
          value={form.howTo}
          onChange={onChange}
        />
      </StudyHowTo>
      <StudyMaxNum>
        <span>정원</span>
        <StyledInput
          type="number"
          min={1}
          max={25}
          name="maxNum"
          value={form.maxNum}
          onChange={onChange}
        />
      </StudyMaxNum>
      <StudyInfo>
        <StyledInput
          id="title"
          type="text"
          placeholder="제목을 입력해주세요"
          name="title"
          value={form.title}
          onChange={onChange}
        />
        <StyledTextArea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="스터디를 설명해주세요"
        />
      </StudyInfo>
      <div className="buttonWrapper">
        <button onClick={onAddStudy}>개설하기</button>
      </div>
    </AddStudyBlock>
  );
}

export default AddStudy;
