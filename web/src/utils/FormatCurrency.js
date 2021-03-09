function FormatCurrency(value) {
  if (!value) {
    return 0;
  }
  let result = value.toLocaleString('pt-br', { minimumFractionDigits: 2 });

  return result;
}

export default FormatCurrency;
