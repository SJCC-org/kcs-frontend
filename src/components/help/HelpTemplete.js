import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const HelpTempleteBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const HelpModal = styled.div`
  width: 480px;
  background-color: white;
  border-radius: 7px;
  font-size: 14px;
  padding: 1rem;

  .closeBlock {
    width: 100%;
    text-align: right;
  }

  p {
    margin: 0;
  }
`;

function HelpTemplete({ onCloseHelp }) {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <HelpTempleteBlock>
      <HelpModal>
        <div className="closeBlock">
          <AiOutlineClose onClick={onCloseHelp} />
        </div>
        <p>
          💡 장애나 버그 발생시 zooneonbot@gmail.com으로 연락주시기 바랍니다.
        </p>
      </HelpModal>
    </HelpTempleteBlock>
  );
}

export default HelpTemplete;
