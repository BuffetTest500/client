import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const { REACT_APP_SERVER_URL } = process.env;

const requestPreferenceInfo = async user => {
  const response = await fetch(
    `${REACT_APP_SERVER_URL}${PATHS.USERS}/${user.uid}/preference_infos/${user.preferenceInfoId}`, {
    method: METHODS.GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return await response.json();
};

export default requestPreferenceInfo;

