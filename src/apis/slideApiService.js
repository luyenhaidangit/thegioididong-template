import axios from '../helpers/Apis/axiosCustomize';

const GetSlideHeaderTopClient = () => {
    //Data
    return axios.get('api/Slide/GetSlideHeaderTop');
}

export {
    GetSlideHeaderTopClient
};