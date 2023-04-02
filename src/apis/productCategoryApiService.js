import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoriesFeaturesHome = () => {
    return axios.get('api/ProductCategory/GetProductCategoriesFeaturesHome');
}

const GetProductCategoryNavigation = () => {
    return axios.get('api/ProductCategory/GetProductCategoryNavigation');
}

const GetProductCategoryTopBanner = (id) => {
    return axios.get('api/ProductCategory/GetProductCategoryTopBanner?id=' + id);
}

export {
    GetProductCategoriesFeaturesHome,
    GetProductCategoryNavigation,
    GetProductCategoryTopBanner
};