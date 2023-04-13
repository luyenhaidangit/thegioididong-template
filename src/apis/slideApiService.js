import axios from '../helpers/Apis/axiosCustomize';

const GetSlideHeaderTopClient = () => {
    return axios.get('api/slide/header-top');
}

const GetSlideBigCampaign = () => {
    return axios.get('api/slide/big-campaign');
}

const GetSlideOptionPromo = () => {
    return axios.get('api/Slide/option-promo');
}

export {
    GetSlideHeaderTopClient,
    GetSlideBigCampaign,
    GetSlideOptionPromo
};