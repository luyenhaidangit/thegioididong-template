import axios from '../helpers/Apis/axiosCustomize';

const GetProductsHotDeal = () => {
    return axios.get('api/product/hot-deal');
}

const GetProductFeaturesHome = () => {
    return axios.get('api/product/features');
}

const GetProductDailySuggest = () => {
    return axios.get('api/product/daily-suggest');
}

const GetProductDetailPage = (id) => {
    return axios.get('api/Product/GetProductDetailPage?id=' + id);
}

const GetProductsProductCategoryDetailPage = (request) => {
    return axios.post('api/product', request);
}

export {
    GetProductsHotDeal,
    GetProductFeaturesHome,
    GetProductDailySuggest,
    GetProductDetailPage,
    GetProductsProductCategoryDetailPage
};