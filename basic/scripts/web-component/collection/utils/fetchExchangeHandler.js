import ApiInstance from "../plugins/axios/index";
// const API_KEY = 'BLUNMEHMBB8K5S5H';
const axiosApi = new ApiInstance();
const basePath = {
  prefix: '/exchange-rates',
};
export const getExchangesRate = (currency) => {
  return axiosApi.get(`${basePath.prefix}`, {
    params: {
      currency: currency,
    },
  });
};
//# sourceMappingURL=fetchExchangeHandler.js.map
