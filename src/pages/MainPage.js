import React, { useState } from "react";
import MainItemList from "../components/main/MainItemList";
import MainTemplete from "../components/MainTemplete";
import ResponsiveStudyCategoryContainer from "../containers/categories/responsive/ResponsiveStudyCategoryContainer";

function MainPage() {
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  const onIsResponsiveOpen = () => {
    setIsResponsiveOpen(!isResponsiveOpen);
  };
  return (
    <div>
      <ResponsiveStudyCategoryContainer
        onIsResponsiveOpen={onIsResponsiveOpen}
      />
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
