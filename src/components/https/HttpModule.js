
import Axios from 'axios';





Axios.interceptors.response.use(null, (error) => {

    /**
     * error.response && error.response.status >= 400 && error.response.status < 500) // expected error /clinet error
     */

    console.log('intercepotr', error)
    if (!(error.response && error.response.status >= 400 && error.response.status < 500)) {
        alert('Something went Worn')
    }

    return Promise.reject(error)
})



export default {
    get: Axios.get,
    post: Axios.post,
    delete: Axios.delete
}