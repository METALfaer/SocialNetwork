import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '57b471bc-9c0e-4a7b-8b7f-0017ad178fce'
    }
})

export const profileAPI = {
    getUserId(userId: any) {
        return instance.get(`profile/` + userId)
            .then(res => res.data)
    },
    getUserStatus(userId: any){
        return instance.get(`profile/status/`+userId)
            .then(res=>res.data)
    },
    updateStatus(status:any){
        return instance.put('profile/status', {status})
            .then(res=>res.data)
    }
}