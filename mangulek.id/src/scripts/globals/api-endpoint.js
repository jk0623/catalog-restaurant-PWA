import CONFIG from './config';

const API_ENDPOINT = {
  NOW_LIST: `${CONFIG.BASE_URL}/list`,

  // eslint-disable-next-line no-unused-vars
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
