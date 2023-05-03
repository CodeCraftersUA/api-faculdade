const isStringsArray = (arr: unknown): boolean => {
	if (!Array.isArray(arr))
		return false;

	for (const a of arr) {
		if (typeof a !== "string")
			return false;
	}

	return true;
};

export default isStringsArray;