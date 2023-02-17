import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import palette from "../../../styles/palette";
import useGetStudyList from "../../../lib/hooks/useGetStudyList";
import { CATEGORY_LIST } from "../../../constants/category";

const ResponsiveStudyCategory = ({ onIsResponsiveOpen }) => {
  const { handleStudyCategory, handleStudyList } = useGetStudyList();

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
        <SwiperSlide onClick={handleStudyList}>
          <span>전체보기</span>
        </SwiperSlide>
        {CATEGORY_LIST.map(({ id, en, ko }) => (
          <SwiperSlide key={id} onClick={() => handleStudyCategory(en)}>
            <span>{ko}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </ResponsiveStudyCategoryBlock>
  );
};

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
