import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestSignIn = async (userInfo, path) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}${path}`, {
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  return await response.json();
};

export default requestSignIn;
