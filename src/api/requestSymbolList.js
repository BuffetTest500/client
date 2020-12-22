import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestSymbolList = async () => {
  try {
    const response = await fetch(
      `https://api.warrenbuffetttest500.site${PATHS.COMPANY_PROFILES}${PATHS.SYMBOL}`, {
      mode: 'no-cors',
      method: METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { result, data } = await response.json();
    const symbolList = data.map(item => item.symbol);

    return { result, symbolList };
  } catch (error) {
    alert(error.message);
  }
};

export default requestSymbolList;
