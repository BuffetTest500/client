import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestRecommendations = async (recommendationCriterion, currentUser, page) => {
  let fetchUrl;

  if (recommendationCriterion === 'preference') {
    fetchUrl = `https://api.warrenbuffetttest500.site${PATHS.USERS}/${currentUser.uid}/portfolios/recommendations/preference/?page=${page}`;
  } else if (recommendationCriterion === 'portfolio') {
    fetchUrl = `https://api.warrenbuffetttest500.site${PATHS.USERS}/${currentUser.uid}/portfolios/recommendations/portfolio/?page=${page}`;
  } else {
    fetchUrl = `https://api.warrenbuffetttest500.site/portfolios/random`;
  }

  const response = await fetch(fetchUrl, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestRecommendations;
