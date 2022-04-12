import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const Card = ({ card }) => {
  const { types, category, title, price, images } = card;

  return (
    <Wrapper>
      <div>
        <Thumnail>
          <img src={images[0]} alt="thumnail" />
          <button className="heartBtn">
            <FaRegHeart />
          </button>
        </Thumnail>
        <CategoryTag type={types}>{types}</CategoryTag>
        <p>{title}</p>
        <Category>{category}</Category>
        <h3>{price}원</h3>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 200px;
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

  button {
    border: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: ${theme.weightBold};
    color: #fff;
    background-color: transparent;
    cursor: pointer;
  }
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
