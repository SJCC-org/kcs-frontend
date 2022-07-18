import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';

const ResponsiveMyPageCategoryBlock = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  width: 100%;
  height: 50px;
  background-color: ${palette.yellow[0]};
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 7px;

  .swiper-slide {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: ${palette.brown[0]};
      font-weight: bold;
    }
  }
`;

function ResponsiveMyPageCategory({ onSwitchCategory }) {
  const onCloseModify = () => {
    alert('준비중 입니다..!');
  };
  return (
    <ResponsiveMyPageCategoryBlock>
      <Swiper
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        breakpoints={{
          425: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Link to="/mypage">
            <span>마이페이지</span>
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide>
          <span>내 정보</span>
        </SwiperSlide> */}
        <SwiperSlide onClick={() => onSwitchCategory('make')}>
          <span>개설한 스터디</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => onSwitchCategory('enter')}>
          <span>참여한 스터디</span>
        </SwiperSlide>
        <SwiperSlide onClick={onCloseModify}>
          {/* <Link to="/mypage/edit/user">
            <span>회원정보 수정</span>
          </Link> */}
          <span>회원정보 수정</span>
        </SwiperSlide>
      </Swiper>
    </ResponsiveMyPageCategoryBlock>
  );
}

export default ResponsiveMyPageCategory;
