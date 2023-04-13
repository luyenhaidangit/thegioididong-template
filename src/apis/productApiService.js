import axios from '../helpers/Apis/axiosCustomize';

const GetProductsHotDeal = () => {
    return axios.get('api/product/hot-deal');
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

const GetProductsProductCategoryDetailPage = (request) => {
    return axios.post('api/Product/GetProductsProductCategoryDetailPage', request);
}

export {
    GetProductsHotDeal,
    GetProductFeaturesHome,
    GetProductDailySuggest,
    GetProductDetailPage,
    GetProductsProductCategoryDetailPage
};