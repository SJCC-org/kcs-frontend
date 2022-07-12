import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';

const ResponsiveStudyCategoryBlock = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  width: 100%;
  height: 50px;
  background-color: ${palette.yellow[0]};

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

function ResponsiveStudyCategory() {
  return (
    <ResponsiveStudyCategoryBlock>
      <Swiper
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        breakpoints={{
          425: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <span>알고리즘</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>자격증</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>수업복습</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>프로젝트</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>CS</span>
        </SwiperSlide>
        <SwiperSlide>
          <span>기타</span>
        </SwiperSlide>
      </Swiper>
    </ResponsiveStudyCategoryBlock>
  );
}

export default ResponsiveStudyCategory;
