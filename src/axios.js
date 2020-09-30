import axios from 'axios';

axios.defaults.baseURL='http://open.duyiedu.com';

axios.interceptors.request.use(request=>{
    request.params={...request.params,'appkey': "chen_tan_1590924460589"}
    return request;
})

axios.interceptors.response.use(response=>{
    if(response.status===200){
        return response.data.data;
    }
    return response;
})
export default axios;