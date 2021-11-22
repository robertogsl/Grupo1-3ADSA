import { Container, Content, Space } from "./styles";

import { OpenServices } from "../OpenServices";
import { RecentProfessional } from "../RecentProfessional";
import { Header } from "../Header";
import { BackButton } from "../BackButton";

export function PageServices() {
  return (
    <Container>
      <Header />
      <BackButton />
      <Content>
        <OpenServices />
        <Space />
        <RecentProfessional />
      </Content>
    </Container>
  );
}
