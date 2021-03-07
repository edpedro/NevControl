function FormatCurrency(value) {
  let result = value.toLocaleString('pt-br', { minimumFractionDigits: 2 });

  return result;
}

export default FormatCurrency;
