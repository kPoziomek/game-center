import logo from "../assets/10136205_4347656.jpg"
import {Avatar, HStack, Text} from "rsuite";

export const NavBar = () => {
  return (
    <HStack>
      <Avatar src={logo} size="lg"  />
      <Text>NavBar</Text>
    </HStack>
  );
};

