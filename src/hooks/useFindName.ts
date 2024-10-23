export const useFindName = (data: any[], id: number | null) => {
	const item = data?.find((item) => item.id === id);
	return item?.name || "";
};
