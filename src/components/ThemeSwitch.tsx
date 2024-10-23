import { HStack, Toggle } from "rsuite";
import { useTheme } from "../hooks/useTheme.ts";

export const ThemeSwitch = () => {
	const { toggleTheme } = useTheme();
	return (
		<HStack>
			<Toggle className="whitespace-nowrap" onChange={toggleTheme}>
				DarkMode
			</Toggle>
		</HStack>
	);
};
