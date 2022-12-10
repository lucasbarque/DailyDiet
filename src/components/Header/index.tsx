import { Container, Logo, Avatar } from "./styles";

import LogoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Avatar source={{ uri: "https://github.com/lucasbarque.png" }} />
    </Container>
  );
}
