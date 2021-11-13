import { Container, Content } from "./styles";

const CardGeneric = (props: { children: any }) => {
  return (
    <Container>
      <Content>
        {props.children}
      </Content>
    </Container>
  );
};

export default CardGeneric;
