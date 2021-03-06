import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { FaVideo, FaLocationArrow, FaBook, FaHeart } from 'react-icons/fa';

import LectureSlide from './Components/LectureSlide';
import MainSlider from './Components/MainSlider';

import { getProfile, getNickName, getToken } from '../../../src/utils';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Main = () => {
  const validtoken = getToken();
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(1);
  const [isShowed, setIsShowed] = useState(false);

  const goToCategoryList = e => {
    const { id } = e.target;
    navigate(`/lectures?category_id=${id}`);
  };

  const goToTypeList = e => {
    const { id } = e.target;

    navigate(`/lectures?types_id=${id}`);
  };

  const goToDetail = e => {
    const { id } = e.target;
    navigate(`/lectures/${id}`);
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
            <h3>??????! ?????? ?????? ????????? ?????????</h3>
            <LectureSlide typesId="3" />
            <h3>?????? ????????? ??? ???????????? ?????????</h3>
            <LectureSlide typesId="1" />
            <h3>?????? VOD, ???????????? ??? ????????????</h3>
            <LectureSlide typesId="2" />
          </LectureContainer>
          <ProfileContainer>
            <Profile>
              {!validtoken ? (
                <>
                  <LoginDescribe>
                    ????????? ????????? ????????? ????????? ????????? ???????????????.
                  </LoginDescribe>
                  <MainLoginBtn to="/login">?????? ?????????</MainLoginBtn>
                </>
              ) : (
                <prifileWrap>
                  <ProfileImg src={getProfile()} />
                  <h3 className="userId">{getNickName()} ???</h3>
                  <h3>????????????</h3>
                  <p>
                    ????????? <span>0</span>p
                  </p>
                  <button>
                    <StyledFaHeart /> ???
                  </button>
                </prifileWrap>
              )}
            </Profile>
            <Search>
              <h3>??? ?????????</h3>

              {TREND_LIST.map(({ lectureId, title }) => {
                return (
                  <span key={lectureId} id={lectureId} onClick={goToDetail}>
                    #{title}
                  </span>
                );
              })}
            </Search>
          </ProfileContainer>
        </MainContainer>
      </div>
    </Wrapper>
  );
};

export default Main;

const CATEGORY_CONTENTS = {
  1: ['??????', '??????', '??????', '??????'],
  2: ['??????', '??????', '??????', '?????? ?? ?????????'],
  3: ['?????????', '??????', '?????????', '??????'],
  4: ['??????', '????????????', '??????', '??????'],
};

const CATEGORY_TITLES = ['??????', '??????', '????????? ?? ??????', '????????????'];

const TYPES = [
  { icon: <FaLocationArrow id="1" />, title: '????????????' },
  { icon: <FaVideo id="2" />, title: 'VOD' },
  { icon: <FaBook id="3" />, title: '?????????' },
];

const TREND_LIST = [
  { lectureId: 37, title: '??????????????? ?????? ???????????? ?????????!' },
  { lectureId: 43, title: '????????? ????????? ??????????????? ??????!' },
  { lectureId: 44, title: '????????? ?????? ??????????????? ?????? ??????!' },
  { lectureId: 41, title: '??????????????? ?????? ????????? ????????????!' },
  { lectureId: 48, title: '?????? ??????????????? ????????? ?????????!' },
  { lectureId: 12, title: '??????????????? ???????????? ????????????' },
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

const LoginDescribe = styled.p`
  margin-bottom: 20px;
  font-weight: ${theme.weightBold};
`;

const MainLoginBtn = styled(Link)`
  display: block;
  padding: 12px 0;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  line-height: 24px;
  background-color: #ff0045;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
