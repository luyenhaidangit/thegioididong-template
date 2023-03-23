import axios from '../helpers/Apis/axiosCustomize';

const GetProductsHotDeal = () => {
    return axios.get('api/Product/GetProductsHotDeal');
}

const GetProductFeaturesHome = () => {
    return axios.get('api/Product/GetProductFeaturesHome');
}

const GetProductDailySuggest = () => {
    return axios.get('api/Product/GetProductDailySuggest');
}

const GetProductDetailPage = (id) => {
    return axios.get('api/Product/GetProductDetailPage?id=' + id);
}

export {
    GetProductsHotDeal,
    GetProductFeaturesHome,
    GetProductDailySuggest,
    GetProductDetailPage
};