import { Link } from 'react-router-dom';
import backgroundimg from '../../assets/premium-icon-magnifier-2311526.png';
import styled from 'styled-components';

const Nav = () => {
  const token = localStorage.getItem('token');

  return (
    <WrapperHead>
      <Link to="/">
        <LogoImg alt="로고" src="/images/logo.svg" />
      </Link>
      <div>
        <GnbHome to="/">홈HOME</GnbHome>
        <GnbVod to="/vod">브오디VOD</GnbVod>
      </div>
      <SearchArea>
        <form name="search">
          <SearchInput
            type="text"
            placeholder="배우고 싶은 재능을 찾아 보세요."
          />
          <SearchGlass />
        </form>
      </SearchArea>
      <GnbRight>
        {token ? (
          <LoginMenu to="/login">로그인</LoginMenu>
        ) : (
          <LoginWrap>
            <LoginMenu to="/">수강목록</LoginMenu>
            <LoginMenu to="/wish-list">찜</LoginMenu>
            <ProfileImg
              src={`${localStorage.getItem('profile')}`}
              alt="카카오프로필임시"
            />
          </LoginWrap>
        )}
      </GnbRight>
    </WrapperHead>
  );
};

export default Nav;

const WrapperHead = styled.div`
  display: flex;
  text-align: center;
  position: sticky;
  top: 0;
  align-items: center;
  width: 1100px;
  height: 80px;
  margin: 0 auto;
  padding: 0 32px 0 36px;
  border-color: #eeeeee;
`;

const LogoImg = styled.img`
  width: 80px;
  margin-right: 80px;
`;

const GnbHome = styled(Link)`
  color: ${props => props.theme.red};
  font-weight: ${props => props.theme.weightBold};
  text-decoration: none;
`;

const GnbVod = styled(Link)`
  margin-left: 20px;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.weightBold};
  text-decoration: none;
`;

const SearchArea = styled.div`
  position: relative;
  width: 280px;
  margin-left: 230px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 58px 0 16px;
  border-radius: 22px;
  border-color: #f6f6f6;
  font-size: ${({ theme }) => theme.fontMicro};
  background-color: #f9f9f9;
  border: 1px solid #ddd;
`;

const SearchGlass = styled.button`
  position: absolute;
  right: 8px;
  top: 2px;
  width: 40px;
  height: 40px;
  border: none;
  background: url(${backgroundimg}) no-repeat center/cover;
`;

const GnbRight = styled.div`
  margin-left: auto;
`;

const LoginWrap = styled.div`
  display: flex;
  align-items: center;
`;

const LoginMenu = styled(Link)`
  margin-right: 10px;
  font-size: ${({ theme }) => theme.fontMicro};
  text-decoration: none;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
