export const getCroppedImage = (url: string) => {
	return url.replace("media/", "media/crop/600/400/");
};
