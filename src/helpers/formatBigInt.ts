const formatBigInt = (value: Object) => {
  return JSON.parse(JSON.stringify(
    value,
    (key, value) => (typeof value === 'bigint' ? Number(value) : value) // return everything else unchanged
  ))
}

export default formatBigInt;