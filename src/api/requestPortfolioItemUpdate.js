import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestPortfolioItemUpdate = async (userUid, data, portfolioItemId) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}${PATHS.USERS}/${userUid}/portfolio_items/${portfolioItemId}`, {
    method: METHODS.PUT,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export default requestPortfolioItemUpdate;
