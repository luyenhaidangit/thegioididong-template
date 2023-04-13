import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoriesFeaturesHome = () => {
    return axios.get('api/product-category/GetProductCategoriesFeaturesHome');
}

const GetProductCategoryNavigation = () => {
    return axios.get('api/product-category/navigation');
}

const GetProductCategoryTopBanner = (id) => {
    return axios.get('api/product-category/GetProductCategoryTopBanner?id=' + id);
}

const GetProductCategoryBoxFilter = (id) => {
    return axios.get('api/product-category/GetProductCategoryBoxFilter?id=' + id);
}

export {
    GetProductCategoriesFeaturesHome,
    GetProductCategoryNavigation,
    GetProductCategoryTopBanner,
    GetProductCategoryBoxFilter
};