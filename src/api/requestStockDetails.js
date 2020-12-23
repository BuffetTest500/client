import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestStockDetails = async (keyword, interval = '1day') => {
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}${PATHS.STOCK_DETAILS}/${keyword}/${interval}`, {
      mode: 'no-cors',
      method: METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { result, stockDetails: data } = await response.json();
    const stockDetails = JSON.parse(data);

    return { result, stockDetails };
  } catch (error) {
    alert(error.message);
  }
};

export default requestStockDetails;
