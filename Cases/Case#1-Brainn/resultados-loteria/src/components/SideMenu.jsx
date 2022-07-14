import { Container, Select, Box, Image, Text } from "@chakra-ui/react";

export default function SideMenu() {
  return (
    <Container
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      bg={"#6BEFA3"}
      margin={"0"}
      pl={"96px"}
      //   borderRightRadius={'61.69%'}
    >
      <Select
        placeholder="Loteria"
        w={"215.91px"}
        bg={"#FFFFFF"}
        marginTop={"92px"}
      >
        <option value="Mega-Sena">Mega-Sena</option>
      </Select>
      <Box>
        <Image></Image>
        <Text color={"#fff"}>Nome da Loteria</Text>
      </Box>
      <Box mb={"92"}>
        <Text color={"#fff"}>CONCURSO</Text>
        <Text color={"#fff"}>1313 - 26/07/1993</Text>
      </Box>
    </Container>
  );
}
