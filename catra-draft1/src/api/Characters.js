import axios from 'axios';

export default {
    async getCharacters() {
        return axios.get('fakeapi.json').then(response => response.data); 
    }
}