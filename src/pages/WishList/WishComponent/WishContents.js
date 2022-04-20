import React from 'react';
import styled from 'styled-components';

const WishContents = ({ lecture, setLectures }) => {
  const { lecture_id, thumbnail_url, name, price, summary } = lecture;

  const deleteLecture = () => {
    fetch(`http://10.58.5.200:8000/carts/like/${lecture_id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        alert('삭제되었습니다!');
        fetch('http://10.58.5.200:8000/carts/like')
          .then(res => res.json())
          .then(data => setLectures(data.results));
      }
    });
  };

  return (
    <Container>
      <Contents>
        <img src={thumbnail_url} alt="" />
        <DetailContents>
          <h3>{name}</h3>
          <p>{summary}</p>
          <Button>
            <font>₩</font>
            <span>{price.split('').splice(0, 6).join('')}</span>
            <button onClick={deleteLecture}>삭제</button>
          </Button>
        </DetailContents>
      </Contents>
    </Container>
  );
};

const Contents = styled.div`
  display: flex;
  width: 1000px;
  border: 1px solid #e4e4e4;
  border-right: none;
  border-left: none;
  img {
    width: 320px;
    height: 180px;
    margin-left: 10px;
  }
  padding: 30px 0px 30px 0px;
`;
const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h3 {
    letter-spacing: -0.6px;
    font-weight: 400;
    padding-right: 120px;
    margin-top: 40px;
    margin-left: 15px;
  }
  p {
    margin-left: 15px;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  font {
    font-size: 15px;
    position: absolute;
    right: 400px;
    color: #ff005a;
  }
  span {
    font-size: 20px;
    position: absolute;
    right: 310px;
    color: #ff005a;
  }
  button {
    position: absolute;
    right: 260px;
    margin-left: 10px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export default WishContents;
