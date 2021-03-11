import moment from 'moment';

function FormatDate(value) {
  const data = moment(String(value), 'YYYY/MM/DD');
  const result = data.format('DD/MM');

  return result;
}

export default FormatDate;
