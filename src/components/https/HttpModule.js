
import Axios from 'axios';





Axios.interceptors.response.use(null, (error) => {

    /**
     * error.response && error.response.status >= 400 && error.response.status < 500) // expected error /clinet error
     */

    console.log('intercepotr', error)
    if (!(error.response && error.response.status >= 400 && error.response.status < 500)) {
        alert('Something went Worn')
    } else {
        return Promise.reject(error)
    }
})



Axios.interceptors.request.use((config) => {
    const token = 'abcd';

    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, function (err) {
    return Promise.reject(err);

})





export default {
    get: Axios.get,
    post: Axios.post,
    delete: Axios.delete
}