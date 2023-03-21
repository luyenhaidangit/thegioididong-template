import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoriesFeaturesHome = () => {
    return axios.get('api/ProductCategory/GetProductCategoriesFeaturesHome');
}

const GetProductCategoryNavigation = () => {
    return axios.get('api/ProductCategory/GetProductCategoryNavigation');
}

export {
    GetProductCategoriesFeaturesHome,
    GetProductCategoryNavigation
};