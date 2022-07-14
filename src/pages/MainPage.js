import React, { useState } from 'react';
import MainTemplete from '../components/MainTemplete';
import ResponsiveStudyCategoryContainer from '../containers/categories/responsive/ResponsiveStudyCategoryContainer';
import MainItemListContainer from '../containers/main/MainItemListContainer';

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
        <MainItemListContainer
          isResponsiveOpen={isResponsiveOpen}
          onIsResponsiveOpen={onIsResponsiveOpen}
        />
      </MainTemplete>
    </div>
  );
}

export default MainPage;
