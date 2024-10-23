import { useState } from "react";
import { Dropdown } from "rsuite";
import { useGameQuery } from "../hooks/useGameQuery.ts";
import { usePlatforms } from "../hooks/usePlatforms.ts";

export const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	const { gameQuery, gameParameters } = useGameQuery();

	if (error) return null;

	return (
		<Dropdown
			title={
				gameQuery.platform
					? data.find((platform) => platform?.id === gameQuery?.platform)?.name
					: "Select a platform"
			}
		>
			{data.map((platform) => (
				<Dropdown.Item
					active={platform.id === gameQuery.platform}
					key={platform.id}
					eventKey={platform.slug}
					onSelect={() => {
						gameParameters("platform", platform.id);
					}}
				>
					{platform.name}
				</Dropdown.Item>
			))}
		</Dropdown>
	);
};
