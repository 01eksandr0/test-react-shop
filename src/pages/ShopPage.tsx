import styled from "styled-components";
import Container from "../components/layout/Container";
import CartList from "../components/shop-page/CartList";
import CartForm from "../components/shop-page/CartForm";

const Section = styled.section`
  background-color: #f8d8b8;
  padding: 60px 0;
`;

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    padding: 145px 0;
    flex-direction: row;
  }
`;
const ShopPage = () => {
  return (
    <Section>
      <Container>
        <ShopContainer>
          <CartList />
          <CartForm />
        </ShopContainer>
      </Container>
    </Section>
  );
};

export default ShopPage;
