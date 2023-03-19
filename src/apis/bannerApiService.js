import axios from '../helpers/Apis/axiosCustomize';

const GetBannerMain = () => {
    return axios.get('api/Banner/GetBannerMain');
}

const GetBannerTopzone = () => {
    return axios.get('api/Banner/GetBannerTopzone');
}

export {
    GetBannerMain,
    GetBannerTopzone
};