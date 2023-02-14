import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

function ResponsiveStudyCategory({
  onIsResponsiveOpen,
  onGetCategoryStudy,
  onGetCategory,
}) {
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
        <SwiperSlide onClick={onIsResponsiveOpen}>
          <span>개설하기</span>
        </SwiperSlide>
        <SwiperSlide onClick={onGetCategory}>
          <span>전체보기</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => onGetCategoryStudy("ALGORITHM")}>
          <span>알고리즘</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => onGetCategoryStudy("CERTIFICATE")}>
          <span>자격증</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => onGetCategoryStudy("CLASS_REVIEW")}>
          <span>수업복습</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => onGetCategoryStudy("PROJECT")}>
          <span>프로젝트</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => onGetCategoryStudy("CS")}>
          <span>CS</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => onGetCategoryStudy("ETC")}>
          <span>기타</span>
        </SwiperSlide>
      </Swiper>
    </ResponsiveStudyCategoryBlock>
  );
}

export default ResponsiveStudyCategory;

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
