import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestTrendingStocks = async () => {
  const response = await fetch(
    `https://api.warrenbuffetttest500.site/hits/trending`, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

export default requestTrendingStocks;
