import axios from '../helpers/Apis/axiosCustomize';

const GetBannerMain = () => {
    return axios.get('api/Banner/GetBannerMain');
}

export {
    GetBannerMain
};