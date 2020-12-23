import METHODS from '../constants/methods';

const { REACT_APP_SERVER_URL } = process.env;

const requestTrendingStocks = async () => {
  const response = await fetch(
    `${REACT_APP_SERVER_URL}/hits/trending`, {
    mode: 'no-cors',
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(await response.json());
  // return await response.json();
};

export default requestTrendingStocks;
