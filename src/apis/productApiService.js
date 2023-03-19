import axios from '../helpers/Apis/axiosCustomize';

const GetProductsHotDeal = () => {
    return axios.get('api/Product/GetProductsHotDeal');
}

export {
    GetProductsHotDeal
};