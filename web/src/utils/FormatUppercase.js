function FormatUppercase(value) {
  let result = value[0].toUpperCase() + value.slice(1).toLowerCase();

  return result;
}

export default FormatUppercase;
