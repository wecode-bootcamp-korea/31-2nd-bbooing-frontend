import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import useWishListCheck from '../../hooks/useWishListCheck';

import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { theme } from '../../styles/theme';

import { API } from '../../config';
import { getToken } from '../../utils';

const Card = ({ card, type }) => {
  const heartBtn = useRef();
  const navigate = useNavigate();
  const isWishList = useWishListCheck();

  const [isLiked, setIsLiked] = useState(isWishList);
  const { id, types, category, title, price, images, likes } = card;

  const addToWish = () => {
    fetch(`${API.carts}`, {
      method: 'POST',
      headers: {
        Authorization: getToken(),
      },
      body: JSON.stringify({
        user_id: 1,
        lectures_id: id,
      }),
    }).then(res => {
      setIsLiked(res.status === 201);
    });

    setIsLiked(true);
  };

  const goToDetail = e => {
    if (heartBtn.current.contains(e.target)) return;

    navigate(`/lectures/${id}`);
  };

  return (
    <Wrapper type={type} onClick={goToDetail}>
      <div>
        <Thumnail>
          <img src={images[0]} alt="thumnail" />
          <HeartBtn onClick={addToWish} ref={heartBtn}>
            {isLiked ? <FaHeart /> : <FaRegHeart />}
          </HeartBtn>
        </Thumnail>
        <CategoryTag type={types}>{types}</CategoryTag>
        <p>{title}</p>
        <Category>{category}</Category>
        <h3>{price}원</h3>
        <Likes type={type}>
          <StyledHeart /> {likes}
        </Likes>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: ${({ type }) => (type ? '235px' : '200px')};
  cursor: pointer;

  p {
    margin: 10px 0;
    font-size: 13px;
  }

  h3 {
    margin: 10px 0;
  }

  .category {
    color: ${theme.fontSub};
  }
`;

const Thumnail = styled.div`
  position: relative;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 150px;
    border-radius: 10px;
  }
`;

const HeartBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 22px;
  font-weight: ${theme.weightBold};
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: 0;
  z-index: 100;
`;

const CategoryTag = styled.span`
  padding: 3px;
  background-color: ${({ type, theme }) => {
    const colorForType = {
      VOD: theme.purple,
      오프라인: theme.red,
      전자책: theme.green,
    };

    return colorForType[type];
  }};
  color: white;
  font-size: 11px;
  border-radius: 3px;
`;

const Category = styled.p`
  color: ${theme.fontSub};
`;

const Likes = styled.span`
  position: absolute;
  bottom: ${({ type }) => (type ? '10px' : '-10px')};
  font-size: 14px;
  font-weight: ${theme.weightBold};
`;

const StyledHeart = styled(FaHeart)`
  color: ${theme.red};
`;
