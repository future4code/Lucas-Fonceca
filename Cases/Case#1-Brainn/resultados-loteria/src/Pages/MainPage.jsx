import { Container } from "@chakra-ui/react";
import Results from "../components/Results";
import SideMenu from "../components/SideMenu";

export default function MainPage() {
  return (
    <Container
      display={"flex"}
      maxW={"1600px"}
      margin={"0"}
      p={"0"}
      bg={"#EFEFEF"}
      zIndex={'-2'}
    >
      <SideMenu w={"613px"} />
      <Results />
    </Container>
  );
}
