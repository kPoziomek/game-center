import { Avatar, Header } from "rsuite";
import logo from "../assets/10136205_4347656.jpg";
import { SearchInput } from "./SearchInput.tsx";
import { ThemeSwitch } from "./ThemeSwitch.tsx";

export const NavBar = () => {
	return (
		<Header className="flex w-full  items-center gap-4  mb-2">
			<div>
				<Avatar src={logo} size="lg" />
			</div>
			<SearchInput />
			<ThemeSwitch />
		</Header>
	);
};
