import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestHitUpdate = symbol => {
  fetch(`${PATHS.SERVER_URI}/hits/${symbol}`, {
    method: METHODS.POST,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default requestHitUpdate;
