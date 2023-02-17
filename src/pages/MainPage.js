import React, { useState } from "react";
import ResponsiveStudyCategory from "../components/categories/responsive/ResponsiveStudyCategory";
import MainItemList from "../components/main/MainItemList";
import MainTemplete from "../components/MainTemplete";

function MainPage() {
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  const onIsResponsiveOpen = () => {
    setIsResponsiveOpen(!isResponsiveOpen);
  };
  return (
    <div>
      <ResponsiveStudyCategory onIsResponsiveOpen={onIsResponsiveOpen} />
      <MainTemplete>
        <MainItemList
          isResponsiveOpen={isResponsiveOpen}
          onIsResponsiveOpen={onIsResponsiveOpen}
        />
      </MainTemplete>
    </div>
  );
}

export default MainPage;
