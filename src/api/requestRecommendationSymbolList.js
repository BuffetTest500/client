import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestRecommendationSymbolList = async keyword => {
  const response = await fetch(`${PATHS.SERVER_URI}${PATHS.COMPANY_PROFILES}${PATHS.RECOMMENDATION_STOCK_LIST}/${keyword}`, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestRecommendationSymbolList;
