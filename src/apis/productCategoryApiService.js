import axios from '../helpers/Apis/axiosCustomize';

const GetProductCategoriesFeaturesHome = () => {
    return axios.get('api/ProductCategory/GetProductCategoriesFeaturesHome');
}

export {
    GetProductCategoriesFeaturesHome
};