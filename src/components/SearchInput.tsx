import SearchIcon from "@rsuite/icons/Search";
import { Input, InputGroup } from "rsuite";
import { useGameQuery } from "../hooks/useGameQuery.ts";

export const SearchInput = () => {
	const { gameParameters } = useGameQuery();
	return (
		<InputGroup className="h-2/4">
			<InputGroup.Addon>
				<SearchIcon />
			</InputGroup.Addon>
			<Input
				size="md"
				placeholder="Search games..."
				onChange={(e) => {
					gameParameters("searchText", e);
				}}
			/>
		</InputGroup>
	);
};
