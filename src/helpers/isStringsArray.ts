const isStringsArray = (arr: unknown): boolean => {
	if (!Array.isArray(arr))
		return false;

	if (arr.every(i => typeof i !== "string"))
		return false;

	return true;
};

export default isStringsArray;