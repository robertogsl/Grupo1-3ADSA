import {
  FaChevronCircleLeft
} from "react-icons/fa";
import { Container } from "./styles";

export function BackButton() {
  return (
    <Container to="/dashboard">
      <FaChevronCircleLeft size={20} color="black" />
      <span>Voltar</span>
    </Container>
  )
}
