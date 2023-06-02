import axios from '../helpers/Apis/axiosCustomize';

const GetSlideHeaderTopClient = () => {
    return axios.get('api/slide/header-top');
}

const GetSlideBigCampaign = () => {
    return axios.get('api/slide/big-campaign');
}

const GetSlideOptionPromo = () => {
    return axios.get('api/slide/option-promo');
}

const GetSlideShoppingTrends = () => {
    return axios.get('api/Slide/shopping-trends');
}

const GetSlideDiscountPayOnline = () => {
    return axios.get('api/slide/discount-pay-online');
}

export {
    GetSlideHeaderTopClient,
    GetSlideBigCampaign,
    GetSlideOptionPromo,
    GetSlideShoppingTrends,
    GetSlideDiscountPayOnline
};