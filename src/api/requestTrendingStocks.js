import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestTrendingStocks = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/hits/trending`, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

export default requestTrendingStocks;
