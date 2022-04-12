import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Card from '../../../components/Card/Card';

const LectureSlide = () => {
  const [cardList, setCardList] = useState([]);
  const getCardListData = async () => {
    const res = await fetch('/data/cards.json');
    const data = await res.json();

    setCardList(data);
  };
  useEffect(() => {
    getCardListData();
  }, []);

  const settings = {
    slide: <Card />,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0px',
  };

  return (
    <Wrapper>
      <StyledSlide {...settings}>
        {cardList?.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </StyledSlide>
    </Wrapper>
  );
};

export default LectureSlide;

const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 30px;
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    width: 680px;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-arrow {
    padding: 4px 6px;
    border: 1px solid #dbdbdb;
    background-color: transparent;
    border-radius: 3px;
  }

  .slick-prev {
    position: absolute;
    top: -30px;
    right: -10px;
    cursor: pointer;
  }

  .slick-next {
    position: absolute;
    top: -30px;
    right: -60px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 600px;
`;
