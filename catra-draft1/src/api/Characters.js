import axios from 'axios';

export default {
    async getCharacters() {
        return await axios.get('fakeapi.json').then(response => {
            console.log(response)
            return response.data;
        }); 
    }
}