const pad = (number: number, length: number) => {

  let str = '' + number;
  while (str.length < length) {
      str = '0' + str;
  }

  return str;
}

export const todayBasicFormat = () => {
  const date = new Date();
  const yyyy = date.getFullYear().toString();
  const MM = pad(date.getMonth() + 1, 2);
  const dd = pad(date.getDate(), 2);
  const hh = pad(date.getHours(), 2);
  const mm = pad(date.getMinutes(), 2)
  const ss = pad(date.getSeconds(), 2)

  return yyyy + MM + dd + hh + mm + ss;
}