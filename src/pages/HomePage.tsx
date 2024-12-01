import styled from "styled-components";
import Container from "../components/layout/Container";
import HomeListItem from "../components/home-page/HomeListItem";
import { useShopStore } from "../stores/products";

const Section = styled.section`
  background-color: #f8d8b8;
  padding: 60px 0;
  @media screen and (min-width: 1440px) {
    padding: 145px 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-size: 26px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 38px;
    font-size: 36px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 38px 20px;
  }
`;

const Button = styled.button`
  margin: 60px auto 0;
  display: block;
  padding: 21px 76px;
  background-color: #ffd012;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 300ms linear;
  &:hover {
    background-color: #ffffff;
  }
  @media screen and (min-width: 1440px) {
    margin: 38px auto 0;
  }
`;

const HomePage = () => {
  const { products } = useShopStore();

  return (
    <Section>
      <Container>
        <Title>SHOP</Title>
        <List>
          {products.map((item) => (
            <li key={item?.id}>
              <HomeListItem data={item} />
            </li>
          ))}
        </List>
        <Button>SEE MORE</Button>
      </Container>
    </Section>
  );
};

export default HomePage;
