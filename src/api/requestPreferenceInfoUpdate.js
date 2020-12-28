  
import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestPreferenceInfoUpdate = async (user, info) => {
  const response = await fetch(
    `${REACT_APP_SERVER_URL}${PATHS.USERS}/${user.uid}/preference_infos`, {
    method: user.preferenceInfoId ? METHODS.PUT : METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(info),
  });

  return await response.json();
};

export default requestPreferenceInfoUpdate;

