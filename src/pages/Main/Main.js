import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaVideo, FaLocationArrow, FaBook, FaHeart } from 'react-icons/fa';

import LectureSlide from './Components/LectureSlide';
import MainSlider from './Components/MainSlider';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Main = () => {
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(1);
  const [isShowed, setIsShowed] = useState(false);

  const goToCategoryList = e => {
    const { id } = e.target;

    navigate(`/lectures?category=${id}`);
  };

  const goToTypeList = e => {
    const { id } = e.target;
    navigate(`/lectures?type=${id}`);
  };

  return (
    <Wrapper>
      <div>
        <MenuContainer>
          <MenuTab>
            <MenuList onMouseLeave={() => setIsShowed(false)}>
              {CATEGORY_TITLES.map((category, idx) => {
                return (
                  <li
                    key={category + idx}
                    onMouseOver={() => {
                      setCurrentId(idx + 1);
                      setIsShowed(true);
                    }}
                  >
                    {category}
                  </li>
                );
              })}
            </MenuList>
            <Contents
              className={isShowed && 'show'}
              onMouseOver={() => setIsShowed(true)}
              onMouseLeave={() => setIsShowed(false)}
            >
              {CATEGORY_CONTENTS[currentId].map((item, idx) => (
                <li
                  key={idx}
                  id={4 * (currentId - 1) + parseInt(idx) + 1}
                  onClick={goToCategoryList}
                >
                  {item}
                </li>
              ))}
            </Contents>
          </MenuTab>
          <MainSlider />
        </MenuContainer>

        <SubMenu>
          {TYPES.map(({ icon, title }, idx) => (
            <SubList id={idx + 1} key={idx} onClick={goToTypeList}>
              {icon}
              {title}
            </SubList>
          ))}
        </SubMenu>
        <MainContainer>
          <LectureContainer>
            <h3>지금! 뜨고 있는 전자책 클래스</h3>
            <LectureSlide />
            <h3>당장 들어야 할 오프라인 클래스</h3>
            <LectureSlide />
            <h3>뿌잉 VOD, 같이하면 더 쉬우니까</h3>
            <LectureSlide />
          </LectureContainer>
          <ProfileContainer>
            <Profile>
              <h3 className="userId">효정님</h3>
              <h3>반가워요</h3>
              <p>
                포인트 <span>0</span>p
              </p>
              <button>
                <StyledFaHeart /> 찜
              </button>
            </Profile>
            <Search>
              <h3>핫 트렌드</h3>
              <span>#강의 이름</span>
              <span>#강의 이름</span>
              <span>#강의 이름</span>
              <span>#강의 이름</span>
              <span>#강의 이름</span>
              <span>#강의 이름</span>
            </Search>
          </ProfileContainer>
        </MainContainer>
      </div>
    </Wrapper>
  );
};

export default Main;

const CATEGORY_CONTENTS = {
  1: ['국내', '일본', '유럽', '미국'],
  2: ['한식', '중식', '일식', '커피 · 디저트'],
  3: ['드로잉', '미술', '글쓰기', '사진'],
  4: ['러닝', '피트니스', '등산', '수영'],
};

const CATEGORY_TITLES = ['여행', '요리', '드로잉 · 사진', '피트니스'];

const TYPES = [
  { icon: <FaLocationArrow id="1" />, title: '오프라인' },
  { icon: <FaVideo id="2" />, title: 'VOD' },
  { icon: <FaBook id="3" />, title: '전자책' },
];

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 370px;
  border-radius: 10px;
`;

const MenuTab = styled.div`
  position: relative;
  padding: 10px;
  width: 150px;
  height: 100%;
  background-color: ${theme.black};
  color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const MenuList = styled.ul`
  li {
    margin: 20px;
    cursor: pointer;
  }
`;

const Contents = styled.ul`
  position: absolute;
  padding: 10px;
  top: 0px;
  left: 150px;
  height: 100%;
  background-color: white;
  color: black;
  opacity: 0;
  z-index: 10;
  transition: opacity 0.4s ease;

  li {
    margin: 20px;
    width: 100px;
    font-weight: ${theme.weightBold};
    cursor: pointer;
  }

  &.show {
    opacity: 1;
  }
`;

const SubMenu = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const SubList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  font-weight: ${theme.weightBold};
  cursor: pointer;

  svg {
    margin-right: 8px;
    margin-bottom: 15px;
    font-size: ${theme.fontMedium};
    color: ${theme.red};
  }
`;

const MainContainer = styled.div`
  display: flex;
`;

const LectureContainer = styled.div`
  h3 {
    font-weight: ${theme.weightBold};
  }
`;

const ProfileContainer = styled.div`
  margin-left: 120px;
`;

const Profile = styled.div`
  position: relative;
  padding: 25px;
  border: 1px #dbdbdb solid;
  border-radius: 3px;
  margin-bottom: 30px;

  button {
    position: absolute;
    right: 15px;
    bottom: 15px;
    border: 0;
    cursor: pointer;

    i {
      color: ${theme.red};
    }
  }

  .userId {
    font-weight: ${theme.weightBold};
    margin-bottom: 10px;
  }

  p {
    display: inline-block;
    padding: 5px 0;
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledFaHeart = styled(FaHeart)`
  color: ${theme.red};
`;

const Search = styled.div`
  padding: 25px;
  border: 1px #dbdbdb solid;
  border-radius: 3px;

  h3 {
    font-weight: ${theme.weightBold};
    margin-bottom: 10px;
  }

  span {
    display: inline-block;
    margin: 6px;
    height: 38px;
    padding: 10px 5px;
    border: 1px solid skyblue;
    border-radius: 3px;
    cursor: pointer;
  }
`;
