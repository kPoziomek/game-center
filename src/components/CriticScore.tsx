import { Badge } from "rsuite";

type Props = {
	score: number;
};
export const CriticScore = ({ score }: Props) => {
	const color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

	return (
		<div className="ml-auto">
			<Badge className="px-3" color={color} content={score} />
		</div>
	);
};
