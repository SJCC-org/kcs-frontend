import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Comment from './comment/Comment';

const ItemInfoTempleteBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .commentButton {
    width: 800px;
    margin-bottom: 0.5rem;
    text-align: right;

    button {
      padding: 0.5rem 0.7rem;
      background-color: ${palette.yellow[0]};
      color: ${palette.black[0]};
      font-weight: 500;
      border: 2px solid ${palette.yellow[0]};
      border-radius: 7px;
      cursor: pointer;
    }
  }
`;

const ItemInfoWrapper = styled.div`
  width: 800px;
  height: 300px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  margin-top: 2rem;
  border-radius: 7px;
  margin-bottom: 2rem;
`;

const AddComment = styled.div`
  width: 800px;
  margin-bottom: 1rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  outline: none;
  border-radius: 7px;
  border: 1px solid ${palette.gray[1]};
`;

const CommentBlock = styled.div`
  width: 800px;
  margin-bottom: 2rem;
  border-radius: 7px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;
function ItemInfoTemplete() {
  const [isOpenComment, setIsOpenComment] = useState(false);

  const onOpenComment = () => {
    setIsOpenComment(!isOpenComment);
  };
  return (
    <ItemInfoTempleteBlock>
      <ItemInfoWrapper>스터디 상세 정보</ItemInfoWrapper>
      <div className="commentButton">
        <button onClick={onOpenComment}>댓글 작성</button>
      </div>
      {isOpenComment && (
        <AddComment>
          <StyledTextArea />
        </AddComment>
      )}
      <CommentBlock>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentBlock>
    </ItemInfoTempleteBlock>
  );
}

export default ItemInfoTemplete;
