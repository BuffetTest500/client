  
import METHODS from '../constants/methods';
import PATHS from '../constants/paths';

const requestPreferenceInfoUpdate = async (user, info) => {
  const response = await fetch(
    `https://api.warrenbuffetttest500.site${PATHS.USERS}/${user.uid}/preference_infos`, {
    mode: 'no-cors',
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

