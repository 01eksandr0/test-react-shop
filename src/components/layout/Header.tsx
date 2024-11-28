import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { LuMenu } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import Container from "./Container";

const HeaderWrapper = styled.header`
  height: 62px;
  background-color: #004832;
  padding: 10px 0;

  @media screen and (min-width: 1440px) {
    height: 120px;
    padding: 31px 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 43px;
  width: 144px;

  @media screen and (min-width: 1440px) {
    height: 58px;
    width: 195px;
  }
`;

const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    height: 44px;
    border-radius: 100px;
    background-color: #fff;
    align-items: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;
  padding: 0 10px;
`;

const NavItem = styled(NavLink)`
  padding: 6px 16px;
  border-radius: 100px;
  color: #000;
  text-decoration: none;

  &.active {
    background-color: #ffd012;
    color: #fff;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MenuButton = styled.button`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  color: #004832;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: #ffd012;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #004832;
  text-decoration: none;

  &:hover {
    color: #004832;
  }

  @media screen and (min-width: 1440px) {
    height: 44px;
    width: 44px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <Logo src="../../../public/assets/logo.svg" alt="Logo" />
          <Nav>
            <NavList>
              <li>
                <NavItem to="/">Home</NavItem>
              </li>
              <li>
                <NavItem to="/shop">Shop</NavItem>
              </li>
              <li>
                <NavItem to="/1">About</NavItem>
              </li>
              <li>
                <NavItem to="/2">Contact</NavItem>
              </li>
            </NavList>
          </Nav>
          <ButtonsContainer>
            <MenuButton>
              <LuMenu size={24} />
            </MenuButton>
            <MenuLink to="/shop">
              <MdOutlineShoppingCart size={24} />
            </MenuLink>
          </ButtonsContainer>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
