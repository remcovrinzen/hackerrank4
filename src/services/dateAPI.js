import axios from 'axios';
const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';

export default {
    getAPIResponse() {
        var response = axios({
            url: DATE_JSON_URL,
            method: 'get'
        });

        return response;
    }
};
