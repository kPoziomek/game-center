export const getCroppedImage = (url: string) => {
	if (!url) return "https://placehold.co/600x400";

	return url.replace("media/", "media/crop/600/400/");
};
