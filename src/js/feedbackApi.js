import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'https://furniture-store-v2.b.goit.study/api',
});

export const getFeedbacks = async () => {
    const res = await serverApi.get('/feedbacks')
    return res.data;
};
