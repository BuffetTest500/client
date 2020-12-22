import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestTrendingStocks = async () => {
  const response = await fetch(
    `https://api.warrenbuffetttest500.site/hits/trending`, {
    mode: 'no-cors',
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseToString = await response.text();
  const json = responseToString === '' ? {} : JSON.parse(responseToString);
  return json;
};

export default requestTrendingStocks;
