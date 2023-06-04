import axios from '../helpers/Apis/axiosCustomize';

const PostOrder = (request) => {
    return axios.post('api/order',request);
}

export {
    PostOrder
};