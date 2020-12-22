import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestPortfolio = async portfolioOwnerUid => {
  const portfolioResponse = await fetch(`https://api.warrenbuffetttest500.site${PATHS.USERS}/${portfolioOwnerUid}/portfolio`, {
    mode: 'no-cors',
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return portfolioResponse.json();
};

export default requestPortfolio;
