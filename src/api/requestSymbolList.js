import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestSymbolList = async () => {
  try {
    const response = await fetch(
      `${REACT_APP_SERVER_URL}${PATHS.COMPANY_PROFILES}${PATHS.SYMBOL}`, {
      mode: 'no-cors',
      method: METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const symbolList = data.map(item => item.symbol);

    return { result, symbolList };
  } catch (error) {
    alert(error.message);
  }
};

export default requestSymbolList;
