import React from 'react';

// node modules
import styled from 'styled-components';
import Slider from 'react-slick';

// components
import HOME_INFO from './home_constants';
import { ColumnContainer } from '../components/ContainerStyles';
import { PageHeader } from '../components/HeaderStyles';
import { IntButtonLink } from '../components/LinkStyles';

const Home = () => {
  document.title = 'Pi Sigma Epsilon | Zeta Chi Chapter';

  const slideItems = HOME_INFO.map((item, index) => {
    return (
      <Slide key={index}>
        <OverlayContainer>
          <PageHeader altStyle>{item.message}</PageHeader>
          <IntButtonLink to={item.link}>{item.text}</IntButtonLink>
        </OverlayContainer>
        <img src={item.imgSrc} alt={item.message} />
      </Slide>
    );
  });

  return (
    <HomeContainer>
      <SlideContainer className="m-0">
        <StyledSlider
          accessibility={true}
          adaptiveHeight={false}
          arrows={false}
          autoplay={true}
          autoplaySpeed={4500}
          centerMode={false}
          draggable={false}
          dots={true}
          dotsClass={'slick-dots'}
          fade={true}
          focusOnSelect={true}
          infinite={true}
          initialSlide={0}
          lazyLoad={true}
          pauseOnHover={false}
          slidesToShow={1}
          slidesToScroll={1}
          swipe={true}
        >
          {slideItems}
        </StyledSlider>
      </SlideContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: #fff;
`;

const SlideContainer = styled.div`
  padding: 0 0 45px 0;
`;

const Slide = ColumnContainer.extend`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  max-width: 100%;
  padding: 0 0 20px 0;
  margin: 0;
`;

const OverlayContainer = ColumnContainer.extend`
  position: absolute;
  z-index: 100;
`;
