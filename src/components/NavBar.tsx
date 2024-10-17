import { Avatar, Header } from "rsuite";
import logo from "../assets/10136205_4347656.jpg";
import { ThemeSwitch } from "./ThemeSwitch.tsx";

export const NavBar = () => {
	return (
		<Header className="flex w-full justify-between mb-2">
			<Avatar src={logo} size="lg" />
			<ThemeSwitch />
		</Header>
	);
};
