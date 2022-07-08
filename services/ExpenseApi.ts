import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://localhost:9000'
})

export const getListExpenseApi = (userKey: string) => axios({
    method: 'POST',
    url: 'http://localhost:9000/api/v1/expense',
    data: {
        userKey: userKey,
    }
});
