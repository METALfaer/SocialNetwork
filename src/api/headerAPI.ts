import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '57b471bc-9c0e-4a7b-8b7f-0017ad178fce'
    }
})
export const headerAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    }
}