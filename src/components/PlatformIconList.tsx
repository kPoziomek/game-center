import { BsGlobe } from "react-icons/bs";
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { Icon } from "@rsuite/icons";
import type { IconType } from "react-icons";
import type { Platform } from "../types/types.ts";

type Props = {
	platform: {
		platform: Platform;
	}[];
};

export const PlatformIconList = ({ platform }: Props) => {
	const IconMap: { [key: string]: IconType } = {
		playstation: FaPlaystation,
		xbox: FaXbox,
		pc: FaWindows,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
		web: BsGlobe,
	};

	return (
		<div className="flex gap-2 flex-auto">
			{platform.map(({ platform }) => (
				<Icon
					key={platform.id}
					as={IconMap[platform.slug]}
					// @ts-ignore
					size="1.5em"
					className="text-neutral-300"
				/>
			))}
		</div>
	);
};
