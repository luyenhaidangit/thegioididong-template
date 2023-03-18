import axios from '../helpers/Apis/axiosCustomize';

const GetSlideHeaderTopClient = () => {
    return axios.get('api/Slide/GetSlideHeaderTop');
}

const GetSlideBigCampaign = () => {
    return axios.get('api/Slide/GetSlideBigCampaign');
}

export {
    GetSlideHeaderTopClient,
    GetSlideBigCampaign
};