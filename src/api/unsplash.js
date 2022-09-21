import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID EjnPBX4Ldag9v7iReK0QgcYWWBgVV2blb3hyMP73BPk'
    }
})