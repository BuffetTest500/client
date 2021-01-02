import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/organisms/Header';
import {
  setCurrentUser,
  setPreferenceInfo,
  setStaticPortfolio,
  setRecommendationCriterion,
  initializeUserStates,
} from '../../store/user';
import LoginModal from '../../components/molecules/LoginModal/';
import PreferencesForm from '../../components/templates/PreferencesForm';
import StockDetails from '../StockDetailsPage';
import PortfolioPage from '../../components/templates/PortfolioPage';
import requestUser from '../../api/requestUser';
import requestPreferenceInfo from '../../api/requestPreferenceInfo';
import { Switch, Route } from 'react-router-dom';
import PATHS from '../../constants/paths';
import '../../sass/app.scss';
import Main from '../MainPage';
import requestPortfolio from '../../api/requestPortfolio';
import setCookie from '../../utils/setCookie';
import getCookie from '../../utils/getCookie';
import uuid from 'uuid-random';

const App = () => {
  const dispatch = useDispatch();
  const { currentUser, staticPortfolio } = useSelector(state => ({
    currentUser: state.user.currentUser,
    staticPortfolio: state.user.staticPortfolio,
  }));
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const loginButtonClickHandler = () => {
    setIsAuthModalOpen(true);
  };
  const onInitialStatesFetched = (user, preferenceInfo) => {
    dispatch(setCurrentUser(user));
    if (!preferenceInfo) return;
    dispatch(setPreferenceInfo(preferenceInfo));
  };
  const onLogin = user => dispatch(setCurrentUser(user));
  const onLogout = () => dispatch(initializeUserStates());
  const onUserUpdate = user => dispatch(setCurrentUser(user));
  const onPreferenceInfoUpdate = preferenceInfo => dispatch(setPreferenceInfo(preferenceInfo));
  const onStaticPortfolioFetched = portfolio => dispatch(setStaticPortfolio(portfolio));

  useEffect(() => {
    if (!currentUser || !staticPortfolio.length) {
      dispatch(setRecommendationCriterion('random'));

      return;
    }

    dispatch(setRecommendationCriterion('portfolio'));
  }, [currentUser, staticPortfolio]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return;

    const initializeUserState = async () => {
      const { user } = await requestUser();
      let preferenceInfoResponse;

      if (user?.preferenceInfoId) {
        preferenceInfoResponse = await requestPreferenceInfo(user);
      }
      onInitialStatesFetched(user, preferenceInfoResponse?.preferenceInfo);
    };

    initializeUserState();
  }, []);

  useEffect(() => {
    if (!currentUser && getCookie('buffettTest500')) return;

    setCookie('buffettTest500', currentUser?.uid || uuid(), 7);
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;

    const fetchStaticPortfolio = async () => {
      const staticPortfolioResponse = await requestPortfolio(currentUser.uid);
      onStaticPortfolioFetched(staticPortfolioResponse.portfolio);
    };

    fetchStaticPortfolio();
  }, [currentUser]);

  return (
    <>
      <Header
        currentUser={currentUser}
        onLoginClick={loginButtonClickHandler}
        onLogoutClick={onLogout}
      />
      {
        isAuthModalOpen
        && <LoginModal
          setIsModalOpen={setIsAuthModalOpen}
          onLogin={onLogin}
        />
      }
      <Switch>
        <Route path={PATHS.ROOT} exact>
          <Main setIsModalOpen={setIsAuthModalOpen} />
        </Route>
        {
          currentUser
          && <Route path='/users/:user_uid/portfolios/:portfolio_owner_uid'>
            <PortfolioPage
              currentUser={currentUser}
              currentUserStaticPortfolio={staticPortfolio}
              onStaticPortfolioFetched={onStaticPortfolioFetched}
            />
          </Route>
        }
        <Route path={PATHS.PREFERENCES}>
          <PreferencesForm
            currentUser={currentUser}
            onUserUpdate={onUserUpdate}
            onPreferenceInfoUpdate={onPreferenceInfoUpdate}
          />
        </Route>
        <Route path={`${PATHS.STOCK_DETAILS}${PATHS.KEYWORD}`}>
          <StockDetails />
        </Route>
      </Switch>
    </>
  );
};

export default App;
