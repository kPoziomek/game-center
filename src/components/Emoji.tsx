import { Text } from "rsuite";

type Props = {
	rating: number;
};

export const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: { src: string; alt: string } } = {
		3: { src: "😀", alt: "smiley face" },
		4: { src: "😎", alt: "cool face" },
		5: { src: "😍", alt: "heart eyes" },
	};

	return <Text>{emojiMap[rating].src}</Text>;
};
