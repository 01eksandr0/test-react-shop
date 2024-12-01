import styled from "styled-components";
import { Product } from "../../types/product";
import { useShopStore } from "../../stores/products";

const ItemContainer = styled.div`
  height: 394px;
  width: 307px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemImgContainer = styled.div`
  height: 276px;
  width: 307px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  overflow: hidden;
`;

const ItemPriceBlock = styled.div`
  height: 106px;
  width: 307px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px;
`;

const ItemTitle = styled.h3`
  text-align: center;
`;
const ItemBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
`;

const ItemPrice = styled.div`
  display: block;
  padding: 10px 52px;
  color: #ff0000;
  font-weight: 700;
  white-space: nowrap;
`;
const ItemButton = styled.button`
  display: block;
  padding: 10px 52px;
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
const HomeListItem = ({ data }: { data: Product }) => {
  const addProductToCart = useShopStore((s) => s.addToCart);

  return (
    <ItemContainer>
      <ItemImgContainer>
        <img src={data.img} alt={data.title + " image."} />
      </ItemImgContainer>
      <ItemPriceBlock>
        <ItemTitle>“{data.title}”</ItemTitle>
        <ItemBottomWrapper>
          <ItemPrice>{data.price} $</ItemPrice>
          <ItemButton onClick={() => addProductToCart(data.id)}>BUY</ItemButton>
        </ItemBottomWrapper>
      </ItemPriceBlock>
    </ItemContainer>
  );
};

export default HomeListItem;
