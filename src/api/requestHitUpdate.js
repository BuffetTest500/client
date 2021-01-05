import METHODS from '../constants/methods';

const { REACT_APP_SERVER_URL } = process.env;

const requestHitUpdate = symbol => {
  fetch(`${REACT_APP_SERVER_URL}/hits/${symbol}`, {
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default requestHitUpdate;
