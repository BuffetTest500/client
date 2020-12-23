import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestRecommendations = async (recommendationCriterion, currentUser, page) => {
  let fetchUrl;

  if (recommendationCriterion === 'preference') {
    fetchUrl = `${REACT_APP_SERVER_URL}${PATHS.USERS}/${currentUser.uid}/portfolios/recommendations/preference/?page=${page}`;
  } else if (recommendationCriterion === 'portfolio') {
    fetchUrl = `${REACT_APP_SERVER_URL}${PATHS.USERS}/${currentUser.uid}/portfolios/recommendations/portfolio/?page=${page}`;
  } else {
    fetchUrl = `${REACT_APP_SERVER_URL}/portfolios/random`;
  }

  const response = await fetch(fetchUrl, {
    mode: 'no-cors',
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestRecommendations;
