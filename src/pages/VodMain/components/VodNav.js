import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const VodNav = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LinkMain>
            <Logo src="/images/logo.svg" />
          </LinkMain>
          <Menu>홈HOME</Menu>
          <Menu>브오디VOD</Menu>
        </Left>
        <Right>
          <SearchBar>
            <SearchInput placeholder="검색어를 입력해주세요." />
            <SearchButton>
              <FiSearch />
            </SearchButton>
          </SearchBar>
          <LoginMenu>로그인</LoginMenu>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexMixin('row', 'center', 'space-between')};
  ${({ theme }) => theme.wrapper('1200px', '0')};
  padding: 0 20px;
  height: 100%;
`;
const Left = styled.div`
  ${({ theme }) => theme.flexMixin('row', 'center', 'flex-start')};
`;
const LinkMain = styled.a`
  cursor: pointer;
`;
const Logo = styled.img`
  filter: invert(100%);
  margin-right: 40px;
`;
const Menu = styled.a`
  color: #fff;
  opacity: 0.8;
  margin-right: 20px;
  font-size: 16px;
  cursor: pointer;
  &:last-child {
    font-weight: bold;
    opacity: 1;
  }
`;
const Right = styled.div`
  ${({ theme }) => theme.flexMixin('row', 'center', 'flex-start')};
`;
const SearchBar = styled.div`
  position: relative;
  width: 280px;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 58px 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 22px;
`;
const SearchButton = styled.button`
  position: absolute;
  padding-right: 12px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
const LoginMenu = styled.a`
  color: #fff;
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
`;

export default VodNav;
