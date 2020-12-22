import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestSignIn = async (userInfo, path) => {
  const response = await fetch(`https://api.warrenbuffetttest500.site${path}`, {
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  return await response.json();
};

export default requestSignIn;
