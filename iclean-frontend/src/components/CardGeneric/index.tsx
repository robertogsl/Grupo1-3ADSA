import { Container, Content, Icon } from "./styles";
import { FaTimes } from "react-icons/fa";

const CardGeneric = (props: { children: any }) => {
  return (
    <Container>
      <Content>
        <Icon>
          <FaTimes size={35} color="#000000" />
        </Icon>
        {props.children}
      </Content>
    </Container>
  );
};

export default CardGeneric;