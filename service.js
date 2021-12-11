const axios = require('axios');

const ACCEPT_HEADER = 'application/json';
const AUTHOR_API_URL = 'https://reststop.randomhouse.com/resources/authors';
const BOOK_API_URL = 'https://reststop.randomhouse.com/resources/works';
const TITLE_API_URL = 'https://reststop.randomhouse.com/resources/titles';

const GENERIC_KEYS = {
    start: 'start',
    max: 'max',
    keyword: 'keyword'
};
const AUTHOR_KEYS = {
    firstName: 'firstName',
    lastName: 'lastName'
};
const SEARCH_TERMS = {
    authorFirstName: 'Kim',
    book: 'End',
};

const randomByAuthor = () => {
    const randomIndex = Math.floor(Math.random() * 10);
    console.log('INDEX: ' + randomIndex);

    axios({
        method: 'GET',
        url: AUTHOR_API_URL,
        responseType: ACCEPT_HEADER,
        params: {
            [GENERIC_KEYS.start]: randomIndex,
            [GENERIC_KEYS.max]: randomIndex + 1,
            [AUTHOR_KEYS.firstName]: SEARCH_TERMS.authorFirstName,
        }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
        console.log('ERROR: ');
      console.log(error);
    });
};

const randomByBook = () => {
    const randomIndex = Math.floor(Math.random() * 10);
    console.log('INDEX: ' + randomIndex);

    axios({
        method: 'GET',
        url: BOOK_API_URL,
        responseType: ACCEPT_HEADER,
        params: {
            [GENERIC_KEYS.start]: randomIndex,
            [GENERIC_KEYS.max]: randomIndex + 1,
            [GENERIC_KEYS.keyword]: SEARCH_TERMS.book
        }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
        console.log('ERROR: ');
      console.log(error);
    });
};

const randomByTitle = () => {
    const randomIndex = Math.floor(Math.random() * 10);
    console.log('INDEX: ' + randomIndex);

    axios({
        method: 'GET',
        url: TITLE_API_URL,
        responseType: ACCEPT_HEADER,
        params: {
            [GENERIC_KEYS.start]: randomIndex,
            [GENERIC_KEYS.max]: randomIndex + 1,
            [GENERIC_KEYS.keyword]: SEARCH_TERMS.book
        }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log('ERROR: ');
      console.log(error);
    });
};

console.log('RUNNING');
randomByBook();
console.log('ENDING');
