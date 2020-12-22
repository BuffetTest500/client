import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestPortfolioItemDelete = async (userUid, portfolioItemId) => {
  const response = await fetch(`https://api.warrenbuffetttest500.site${PATHS.USERS}/${userUid}/portfolio_items/${portfolioItemId}`, {
    mode: 'no-cors',
    method: METHODS.DELETE,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestPortfolioItemDelete;
