import axiosClient from './axiosClient';


const productAPI = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, {
            params,

        });
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    addBook: (data) => {
        const url = '/products'
        return axiosClient.post(url, data);
    },
    updateBook: (id, data) => {
        const url = `/products/${id}`;
        return axiosClient.put(url, data);
    },

    deleteBook: (id) => {
        return axiosClient.delete(`/products/${id}`);
    }

}

export default productAPI;
