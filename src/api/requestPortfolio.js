import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestPortfolio = async portfolioOwnerUid => {
  const portfolioResponse = await fetch(`${process.env.REACT_APP_SERVER_URL}/${portfolioOwnerUid}/portfolio`, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return portfolioResponse.json();
};

export default requestPortfolio;
