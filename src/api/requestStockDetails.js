import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestStockDetails = async (keyword, interval) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}${PATHS.STOCK_DETAILS}/${keyword}/${interval}`, {
      method: METHODS.GET,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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
