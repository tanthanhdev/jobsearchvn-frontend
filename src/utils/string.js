
var sliceStr = (str, start, end) => {
  return str.slice(start, end) + ' ' + (str.length > (end - start) ? '...' : '');
}

var jobStatus = (status) => {
  let strStatus=''
  switch(status){
    case 1:
      strStatus =  'Đang hiển thị'
      break;
    case 2:
      strStatus =  'Đang ẩn'
      break;
    case 3:
      strStatus =  'Hết hạn'
      break;
    default:
      return ''
  }
  return strStatus
}

const strUtils = {
    sliceStr,
    jobStatus
  };
  
export default strUtils;