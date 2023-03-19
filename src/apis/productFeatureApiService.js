import axios from '../helpers/Apis/axiosCustomize';

const GetProductFeaturesHome = () => {
    return axios.get('api/ProductFeature/GetProductFeaturesHome');
}

export {
    GetProductFeaturesHome
};