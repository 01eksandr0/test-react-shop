import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const Container = styled.div`
  padding: 0 62px;

  @media screen and (min-width: 1440px) {
    padding: 0 220px;
  }
`;

const ContainerComponent = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default ContainerComponent;
