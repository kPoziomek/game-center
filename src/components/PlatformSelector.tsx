import { Dropdown } from "rsuite";
import { useGameQuery } from "../hooks/useGameQuery.ts";
import { usePlatforms } from "../hooks/usePlatforms.ts";

export const PlatformSelector = () => {
	const { data } = usePlatforms();
	const { gameQuery, gameParameters } = useGameQuery();
	return (
		<Dropdown
			title={
				gameQuery.platform
					? data.find((platform) => platform?.slug === gameQuery?.platform)
							?.name
					: "Select a platform"
			}
		>
			{data.map((platform) => (
				<Dropdown.Item
					active={platform.slug === gameQuery.platform}
					key={platform.id}
					eventKey={platform.slug}
					onSelect={() => {
						gameParameters("platform", platform.slug);
					}}
				>
					{platform.name}
				</Dropdown.Item>
			))}
		</Dropdown>
	);
};
