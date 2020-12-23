import METHODS from '../constants/methods';
import PATHS from '../constants/paths';
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

  return await response.json();
};

export default requestTrendingStocks;
