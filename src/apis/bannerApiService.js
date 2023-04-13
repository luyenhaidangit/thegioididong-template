import axios from '../helpers/Apis/axiosCustomize';

const GetBannerMain = () => {
    return axios.get('api/banner/banner-main');
}

const GetBannerTopzone = () => {
    return axios.get('api/banner/banner-topzone');
}

export {
    GetBannerMain,
    GetBannerTopzone
};