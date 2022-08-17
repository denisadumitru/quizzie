import axios from 'axios';
import services from '../../../config/services';

const instance = axios.create({
  baseURL: services.quiz.baseURL,
});

export default instance;
