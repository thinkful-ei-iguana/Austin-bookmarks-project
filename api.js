/* eslint-disable indent */
//import cuid from './cuid'; ??
const BASE_URL = ' https://thinkful-list-api.herokuapp.com/austin';

const validateName = function(title) {
    if (!title) {
        throw new TypeError('Must Provide Name');
    }
};

const validateUrl = function(url) {
    if (!url) {
        throw new TypeError('Must Provide Valid URL');
    }
};

const createBookmark = function (title, rating, url, description) {
    return {
        //id: cuid(), ???
        title,
        rating,
        url,
        description,
        expanded: false
    };
};

export default {
    validateName,
    validateUrl,
    createBookmark
};
