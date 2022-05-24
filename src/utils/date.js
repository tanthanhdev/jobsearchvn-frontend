import moment from 'moment';
import { parse, isDate } from "date-fns";

var timeSince = date => {
    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + "  năm trước";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " tháng trước";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " ngày trước";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " giờ trước";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " phút trước";
    }
    return Math.floor(seconds) + " giây trước";
}

var timeSinceStartDate = (start, end) => {
  console.log(start);
  var seconds = Math.floor((end - start) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + "  năm trước";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " tháng trước";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày trước";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " giờ trước";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút trước";
  }
  return Math.floor(seconds) + " giây trước";
}

var formatDate = (dateString, type) => {
  return moment(dateString).format(type);
}
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
  ? originalValue  // this make sure that a value is provided
  : parse(originalValue, "YYYY-MM-DD", new Date());

  return parsedDate;
}
const dateUtils = {
    timeSince,
    formatDate,
    timeSinceStartDate,
    parseDateString,
  };
  
export default dateUtils;