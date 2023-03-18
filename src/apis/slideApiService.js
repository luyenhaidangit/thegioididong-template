import axios from '../helpers/Apis/axiosCustomize';

const GetSlideHeaderTopClient = () => {
    return axios.get('api/Slide/GetSlideHeaderTop');
}

const GetSlideBigCampaign = () => {
    return axios.get('api/Slide/GetSlideBigCampaign');
}

const GetSlideOptionPromo = () => {
    return axios.get('api/Slide/GetSlideOptionPromo');
}

export {
    GetSlideHeaderTopClient,
    GetSlideBigCampaign,
    GetSlideOptionPromo
};