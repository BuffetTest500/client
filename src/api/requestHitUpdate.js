import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestHitUpdate = symbol => {
  fetch(`${process.env.REACT_APP_SERVER_URL}/hits/${symbol}`, {
    method: METHODS.POST,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default requestHitUpdate;
