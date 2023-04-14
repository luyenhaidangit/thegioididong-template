import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoriesFeaturesHome = () => {
    return axios.get('api/product-category/features');
}

const GetProductCategoryNavigation = () => {
    return axios.get('api/product-category/navigation');
}

const GetProductCategoryTopBanner = (id) => {
    return axios.get('api/product-category/top-banner?id=' + id);
}

const GetProductCategoryBoxFilter = (id) => {
    return axios.get('api/product-category/box-filter?id=' + id);
}

export {
    GetProductCategoriesFeaturesHome,
    GetProductCategoryNavigation,
    GetProductCategoryTopBanner,
    GetProductCategoryBoxFilter
};