import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestPortfolio = async portfolioOwnerUid => {
  const portfolioResponse = await fetch(`${REACT_APP_SERVER_URL}${PATHS.USERS}/${portfolioOwnerUid}/portfolio`, {
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
