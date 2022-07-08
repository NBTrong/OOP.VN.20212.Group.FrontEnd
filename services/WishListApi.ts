import axios from "axios";

// const axiosApi = axios.create({
//     baseURL: 'localhost:9000'
// })

export const getWishListApi = (userKey: string) => axios({
    method: 'POST',
    url: 'http://localhost:9000/api/v1/WishList',
    data: {
        userKey: userKey,
    }
});