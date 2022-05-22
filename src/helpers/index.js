export const validateEmail = (email) => {
    const result = /\S+@\S+\.\S+/;
    return result.test(email);
};

export const validatePassword = (password) => {
    let valid = true;
    if (password?.length === 0) {
        valid = true;
    }
    if (password) {
        if (password?.length <= 1) {
            valid = false;
        }
        if (password?.length > 1) {
            valid = true;
        }
    }

    return valid;
};

export const checkNumLength = (num) => {
    return String(num).split('').length;
};

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const getCookie = (name) => {
    let matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

//This func delete spaces & symbols and space change to -
export const urlFormatter = (str) => {
    return str
        .replace(/[^a-zA-Z ]/g, '')
        .split(/\s+/)
        .join('-');
};

export const isMobile = () => {
    return window.innerWidth <= 480;
};

export const convertTimeStampToDate = (timeStamp) => {
    let day = new Date(timeStamp);
    let dd = String(day.getDate()).padStart(2, '0');
    let mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = day.getFullYear();

    return dd + '-' + mm + '-' + yyyy;
};

export const convertDateTimeToTimeStamp = (dateTime) => {
    return Number((new Date(dateTime).getTime() / 1000).toFixed(0));
};