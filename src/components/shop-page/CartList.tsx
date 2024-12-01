import styled from "styled-components";
import { useShopStore } from "../../stores/products";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import CartItem from "./CartItem";

const ListContainer = styled.div`
  background-color: #fff;
  min-height: 300px;
  width: 100%;
  max-width: 820px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding-bottom: 80px;

  @media screen and (min-width: 1440px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 30px;
    padding: 60px 60px 112px;
  }
`;
const TitleContainer = styled.div`
  width: 100%;
  padding: 14px 10px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1440px) {
    padding: 0 0 26px;
  }
`;

const ListTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const ButtonDeleteAll = styled.button`
  display: block;
  padding: 10px 30px;
  background-color: #ffd012;
  font-weight: 700;
  border-radius: 30px;
  color: #000;
  transition: background-color 300ms linear, border 300ms linear;
  &:hover {
    background-color: #ffffff;
    border: 1px solid #000;
  }
`;

const ShopData = styled.div`
  padding: 20px 15px;
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
    max-height: 400px;
  }
`;

const ShopNoData = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 50px 16px;
  height: 200px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToBackLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  gap: 24px;
  color: #000;
  font-size: 16px;
`;

const MobailCountData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  & > p {
    font-weight: 600;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
const DeskCountData = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    gap: 78px;
    & > p {
      font-weight: 600;
      white-space: nowrap;
    }
  }
`;

const CartList = () => {
  const totalItems = useShopStore((state) => state.totalCartItems());
  const cart = useShopStore((state) => state.cart);
  const countItems = useShopStore((state) => state.totalCartPrice());
  const deleteAllProducts = useShopStore((state) => state.removeAllCart);

  return (
    <ListContainer>
      <TitleContainer>
        <ListTitle>Shopping Cart</ListTitle>
        {totalItems > 0 && (
          <ButtonDeleteAll onClick={deleteAllProducts}>
            Empty Trash
          </ButtonDeleteAll>
        )}
      </TitleContainer>
      {totalItems > 0 ? (
        <ShopData>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <CartItem data={item} />
              </li>
            ))}
          </ul>
          <MobailCountData>
            <span>Subtotal</span>
            <p>Rs. {countItems}</p>
          </MobailCountData>
        </ShopData>
      ) : (
        <ShopNoData>
          The cart is empty for now. You need to select a product to proceed
          with your order.
        </ShopNoData>
      )}
      <LinkContainer>
        <ToBackLink to="/">
          <IoIosArrowBack /> Back to shop
        </ToBackLink>
        {totalItems > 0 && (
          <DeskCountData>
            <span>Subtotal</span>
            <p>Rs. {countItems}</p>
          </DeskCountData>
        )}
      </LinkContainer>
    </ListContainer>
  );
};

export default CartList;
