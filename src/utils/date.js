import moment from 'moment';

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

var formatDate = (dateString, type) => {
  return moment(dateString).format(type);
}

const dateUtils = {
    timeSince,
    formatDate,
  };
  
export default dateUtils;