/**
 * 全局过滤器
 *
 * @autor ln
 * @date 2021/4/20
 */
import Vue from 'vue';
import moment from "moment"

Vue.filter("dataFormat", (date, format = "yyyy-MM-dd") => {
  date = new Date(date);
  if (date == 'Invalid Date') {
    throw new Error("传入的时间格式不正确!");
  }
  const dateObj = {
    year: () => date.getFullYear(),
    month: () => padStart(date.getMonth() + 1),
    day: () => padStart(date.getDate()),
    hours: () => padStart(date.getHours()),
    minutes: () => padStart(date.getMinutes()),
    seconds: () => padStart(date.getSeconds()),
  };
  switch (format) {
    case "yyyy-MM-dd":
      return `${dateObj.year()}-${dateObj.month()}-${dateObj.day()}`;
    case "yyyy-MM-dd HH":
      return `${dateObj.year()}-${dateObj.month()}-${dateObj.day()} ${dateObj.hours()}`;
    case "yyyy-MM-dd HH:mm":
      return `${dateObj.year()}-${dateObj.month()}-${dateObj.day()} ${dateObj.hours()}:${dateObj.minutes()}`;
    case "yyyy-MM-dd HH:mm:ss":
      return `${dateObj.year()}-${dateObj.month()}-${dateObj.day()} ${dateObj.hours()}:${dateObj.minutes()}:${dateObj.seconds()}`;
    default:
      throw new Error("传入的时间格式不正确!")
  }
});

function padStart(value, maxLength = 2, fillStr = "0") {
  value = typeof value === 'string' ? value : value.toString();
  return value.padStart(maxLength, fillStr)
}

Vue.filter("dataFormatPlus", (date, dateFormat = 'yyyy-MM-DD') => {
  if (!moment(date).isValid()) {
    throw new Error("日期格式不正确")
  }
  return moment(date).format(dateFormat);
});


