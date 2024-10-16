import logo from "../assets/10136205_4347656.jpg"
import {Avatar, HStack} from "rsuite";
import {ThemeSwitch} from "./ThemeSwitch.tsx";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between"  className="p-[12px]">
      <Avatar src={logo} size="lg"  />
      <ThemeSwitch/>
    </HStack>
  );
};

