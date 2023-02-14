import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";
import LoginFormContainer from "../../containers/auth/LoginFormContainer";
import HelpTemplete from "../help/HelpTemplete";

function Header({ userRes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const onCloseLoginModal = () => {
    setIsOpen(!isOpen);
  };
  const onCloseHelp = () => {
    setIsOpenHelp(!isOpenHelp);
  };
  return (
    <>
      {isOpen && <LoginFormContainer onCloseLoginModal={onCloseLoginModal} />}
      {isOpenHelp && <HelpTemplete onCloseHelp={onCloseHelp} />}
      <HeaderBlock>
        <Link to="/">
          <div className="headerTitle">
            <h2 id="kakao">카카오</h2>
            <h2 id="cloud">클라우드 스쿨 스터디</h2>
          </div>
        </Link>
        <div className="buttonWrapper">
          <div id="help" onClick={onCloseHelp}>
            문의사항
          </div>
          {userRes ? (
            <div id="login">
              <Link to="/mypage">MY</Link>
            </div>
          ) : (
            <div id="login" onClick={() => setIsOpen(!isOpen)}>
              로그인
            </div>
          )}
        </div>
      </HeaderBlock>
    </>
  );
}

export default Header;

const HeaderBlock = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${palette.gray[0]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: 425px) {
    padding: 0 1rem;
  }

  .headerTitle {
    display: flex;

    @media (max-width: 480px) {
      flex-direction: column;

      h2 {
        margin: 0;

        @media (max-width: 460px) {
          font-size: 20px;
        }
      }
    }
    #kakao {
      color: ${palette.yellow[0]};
    }

    #cloud {
      color: ${palette.brown[0]};
    }
  }
  .buttonWrapper {
    display: flex;
    align-items: center;

    #login {
      color: ${palette.brown[0]};
      font-size: 18px;
      font-weight: bold;
      padding-left: 0.5rem;
      cursor: pointer;
      @media (max-width: 460px) {
        padding: 0.5rem 0.7rem;
        font-size: 16px;
      }
    }

    #help {
      color: ${palette.brown[0]};
      font-size: 18px;
      font-weight: bold;
      padding-right: 0.5rem;
      border-right: 2px solid ${palette.yellow[0]};
      cursor: pointer;

      @media (max-width: 460px) {
        padding: 0.5rem 0.7rem;
        font-size: 16px;
      }
    }
  }
`;
