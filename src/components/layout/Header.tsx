import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { LuMenu } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import Container from "./Container";
import { useShopStore } from "../../stores/products";

const HeaderWrapper = styled.header`
  height: 62px;
  background-color: #004832;
  padding: 10px 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  @media screen and (min-width: 1440px) {
    height: 120px;
    padding: 31px 0;
    position: static;
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
  padding: 0;
`;

const NavItem = styled(NavLink)`
  padding: 12px 16px;
  border-radius: 100px;
  color: #000;
  text-decoration: none;

  &.active {
    background-color: #ffd012;
    color: #004832;
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
  & svg {
    height: 22px;
    width: 22px;
    flex-shrink: 0;
  }
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
  position: relative;

  &:hover {
    color: #004832;
  }

  @media screen and (min-width: 1440px) {
    height: 44px;
    width: 44px;
  }
`;

const ShopProductsCount = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 10px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const totalItems = useShopStore((state) => state.totalCartItems());

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <Logo src="/assets/logo.svg" alt="Logo" />
          <Nav>
            <NavList>
              <li>
                <NavItem to="/">Home</NavItem>
              </li>
              <li>
                <NavItem to="/shop">Shop</NavItem>
              </li>
              <li>
                <NavItem to="/about">About</NavItem>
              </li>
              <li>
                <NavItem to="/contact">Contact</NavItem>
              </li>
            </NavList>
          </Nav>
          <ButtonsContainer>
            <MenuButton>
              <LuMenu />
            </MenuButton>
            <MenuLink to="/shop">
              <MdOutlineShoppingCart size={24} />
              {totalItems > 0 && (
                <ShopProductsCount>{totalItems}</ShopProductsCount>
              )}
            </MenuLink>
          </ButtonsContainer>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
