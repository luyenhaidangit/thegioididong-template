import axios from '../helpers/Apis/axiosCustomize';

const GetProductsHotDeal = () => {
    return axios.get('api/Product/GetProductsHotDeal');
}

const GetProductFeaturesHome = () => {
    return axios.get('api/Product/GetProductFeaturesHome');
}

export {
    GetProductsHotDeal,
    GetProductFeaturesHome
};