import axios from "axios";

// const axiosApi = axios.create({
//     baseURL: 'localhost:9000'
// })

export const getListIncomeApi = (userKey: string) => axios({
    method: 'POST',
    url: 'http://localhost:9000/api/v1/income',
    data: {
        userKey: userKey,
    }
});