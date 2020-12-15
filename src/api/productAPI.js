import axiosClient from './axiosClient';


const productAPI = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, {
            params,
            headers: {
                'ta': 'dz'
            }
        });
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

}

export default productAPI;
