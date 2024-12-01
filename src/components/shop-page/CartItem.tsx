import React, { useState } from "react";
import styled from "styled-components";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Product } from "../../types/product";
import { useShopStore } from "../../stores/products";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 10px;
`;

const ItemContainer = styled.div`
  background-color: #3030301a;
  border-radius: 30px;
  padding: 10px 20px 10px 10px;
  flex-grow: 1;
  height: 148px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  height: 105px;
  width: 105px;
  display: flex;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & > img {
    display: block;
    height: 105px;
    width: 105px;
  }
`;

const ItemDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  & > p {
    font-size: 12px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 44px;
    justify-content: space-between;
  }
`;

const Input = styled.input`
  height: 32px;
  width: 32px;
  border: 1px solid #252525;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: transparent;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    outline: 1px solid #004832;
  }
`;

const ButtonDelete = styled.button`
  background-color: #fff;
  color: #000;
  &:focus {
    outline: none;
  }
  & > svg {
    height: 22px;
    width: 22px;
  }
`;

const CartItem = ({ data }: { data: Product & { count: number } }) => {
  const [count, setCount] = useState<null | number>(data.count);
  const setCountItem = useShopStore((s) => s.updateCartItemCount);
  const deleteItem = useShopStore((s) => s.removeFromCart);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setCount(0);
    } else {
      const newValue = parseInt(value, 10);
      if (!isNaN(newValue) && newValue >= 0) {
        setCount(newValue);
      }
    }
  };

  const handleInputBlur = () => {
    if (count !== null) {
      setCountItem(data.id, count);
    }
  };

  return (
    <ItemWrapper>
      <ItemContainer>
        <ImageContainer>
          <img src={data.img} alt={data.title} />
        </ImageContainer>
        <ItemDataContainer>
          <p>{data.title}</p>
          <p>Rs. {data.price} $</p>
          <Input
            type="number"
            value={count || 0}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <p>Rs. {data.price * (count || 0)} $</p>
        </ItemDataContainer>
      </ItemContainer>
      <ButtonDelete onClick={() => deleteItem(data.id)}>
        <RiDeleteBin7Fill />
      </ButtonDelete>
    </ItemWrapper>
  );
};

export default CartItem;
