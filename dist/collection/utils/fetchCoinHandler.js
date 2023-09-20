import ApiInstance from "../plugins/axios/index";
// const API_KEY = 'BLUNMEHMBB8K5S5H';
const axiosApi = new ApiInstance();
const basePath = {
  prefix: '/prices',
};
const PriceInfo = new Map();
const btc = new Map();
const eth = new Map();
const pairCoin = new Map();
const fetchPrices = (pair) => {
  return axiosApi.get(`${basePath.prefix}/${pair}/buy`);
};
const addPricesInfo = (entries, pair) => {
  PriceInfo.set('money', parseFloat(entries.data.amount));
  PriceInfo.set('formatted', new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(entries.data.amount));
  PriceInfo.set('name', pair.split('-')[0]);
};
const grabPrices = async (pair) => {
  try {
    const response = await fetchPrices(pair);
    console.log('response', response);
    if (response.status === 200) {
      const { data: result } = response;
      addPricesInfo(result, pair);
      return true;
    }
    else {
      return null;
    }
  }
  catch (e) {
    return null;
  }
};
export const setValues = async (value) => {
  try {
    const response = await grabPrices(value);
    if (response) {
      if (value === 'BTC-USD') {
        btc.set('name', PriceInfo.get('name'));
        btc.set('formatted', PriceInfo.get('formatted'));
        btc.set('money', PriceInfo.get('money'));
        return btc;
      }
      else if (value === 'ETH-USD') {
        eth.set('name', PriceInfo.get('name'));
        eth.set('formatted', PriceInfo.get('formatted'));
        eth.set('money', PriceInfo.get('money'));
        return eth;
      }
      else {
        pairCoin.set('name', PriceInfo.get('name'));
        pairCoin.set('formatted', PriceInfo.get('formatted'));
        pairCoin.set('money', PriceInfo.get('money'));
        return pairCoin;
      }
    }
    else {
      return null;
    }
    // date = new Date().toString();
  }
  catch (e) {
    return null;
  }
};
//# sourceMappingURL=fetchCoinHandler.js.map
