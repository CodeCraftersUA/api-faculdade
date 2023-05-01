const containsDuplicates = (arr: Array<unknown>): boolean => {
	if (arr.length !== new Set(arr).size)
		return true;

	return false;
};

export default containsDuplicates;