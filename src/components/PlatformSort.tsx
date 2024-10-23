import { Dropdown } from "rsuite";
import { useGameQuery } from "../hooks/useGameQuery.ts";

export const PlatformSort = () => {
	const { gameQuery, gameParameters } = useGameQuery();
	const sortOrders = [
		{ value: "-name", label: "name" },
		{ value: "-released", label: "released" },
		{ value: "-added", label: "added" },
		{ value: "-created", label: "created" },
		{ value: "-updated", label: "updated" },
		{ value: "-rating", label: "rating" },
		{ value: "-metacritic", label: "metacritic" },
	];

	return (
		<Dropdown
			title={`sort by ${sortOrders.find((platform) => platform.label === gameQuery.sortOrder)?.label || ""}`}
		>
			{sortOrders.map((platform) => (
				<Dropdown.Item
					active={gameQuery.sortOrder === platform.label}
					key={platform.label}
					eventKey={platform.label}
					onSelect={() => {
						gameParameters("sortOrder", platform.label);
					}}
				>
					{platform.label}
				</Dropdown.Item>
			))}
		</Dropdown>
	);
};
