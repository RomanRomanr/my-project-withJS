import axios from 'axios';
import 'css-star-rating/css/star-rating.css';

const serverApi = axios.create({
  baseURL: 'https://furniture-store-v2.b.goit.study/api',
});

export const getFeedbacks = async () => {
  const res = await serverApi.get('/feedbacks');
  return res.data.feedbacks;
};
