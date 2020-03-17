export const withType = (type, data = {}) => {
    data.type = type;
    return data;
};

export const apiResult = {
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL'
};

export const asIdMap = (array) =>
    array.reduce((map, item) => ({...map, [item.id]: item}), {});

export const asIds = (array) =>
    array.map((item) => item.id.toString());

// https://codepen.io/gapcode/pen/vEJNZN
export const detectIE = () => {
    let ua = window.navigator.userAgent;
    let msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    let trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        let rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    let edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
};