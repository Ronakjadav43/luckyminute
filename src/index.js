import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import initialState from "./Reducers/initialState";
import rootReducer from "./Reducers";
import HomeRoulette from "./Components/HomeRoulette";
import HomeBaccarat from "./Components/HomeBaccarat";
import RouletteWheel from "./Components/Roulette/RouletteWheel";
import Error from "./CommonComponents/Error";
import TopWinners from "./Components/Roulette/TopWinners";
import Statistic from "./Components/Roulette/Statistic";
import PastResult from "./Components/Roulette/PastResult";
import BettingGuide from "./Components/Roulette/BettingGuide";
import BettingFrame from "./Components/Roulette/BettingFrame";
import TopBets from "./Components/Roulette/TopBets";
import SicboBetting from "./Components/SicBo/SicboBetting";
import Start from "./Components/Start";
import PageNotFound from "./CommonComponents/Page Not Found";
// import Bacarrat from "./Components/Bacarrat";
import Login from "./Components/Login";
import BaccaratBetting from "./Components/Baccarat/BaccaratBetting";
import BaccaratCardDeal from "./Components/Baccarat/BaccaratCardDeal";
import {
  RequireAuthAgent,
  RequireAuthManager,
  RequireAuthPlayer,
  LoginedIn,
} from "./Routes";
import HomeSicbo from "./Components/HomeSicbo";
import ChangePassword from "./CommonComponents/ChangePassword";

//Agent
import HomeAgent from "./Components/HomeAgent";
import AgentDashboard from "./Components/Agent/Home";

import AgentReport from "./Components/Agent/Report";
import SuccessAgentreport from "./Components/Agent/Report/SuccessReport";

import Setting from "./Components/Agent/Setting";
import AgentChangePassword from "./Components/Agent/ChangePassword";

import Message from "./Components/Agent/Message";
import NewMessage from "./Components/Agent/NewMessage";
import ReadMessage from "./Components/Agent/ReadMessage";

import AgentTransaction from "./Components/Agent/Transaction";

import Language from "./Components/Agent/Language";

//Agent User
import HomeUser from "./Components/Agent/User";
import UserDetail from "./Components/Agent/User/UserDetailHome";
import Transaction from "./Components/Agent/User/Transaction";
import Label from "./Components/Agent/User/Label";
import BetHistory from "./Components/Agent/User/BetHistory";
import PlayerDetails from "./Components/Agent/User/UserDetail";
import DepositCredit from "./Components/Agent/User/DepositCredit";
import WithdrawCredit from "./Components/Agent/User/WithdrawCredit";
import Report from "./Components/Agent/User/Report";
import SuccessUserReport from "./Components/Agent/User/Report/SuccessUserReport";

//Agent Add User
import User from "./Components/Agent/User/Users";
import AddUser from "./Components/Agent/User/AddUser";
import AddedUser from "./Components/Agent/User/AddUser/AddedUser";

//Manager
import HomeManager from "./Components/HomeManager";
import ManagerDashboard from "./Components/Manager/Home";

import ManagerReport from "./Components/Manager/Report";
import SuccessManagerReport from "./Components/Manager/Report/SuccessReport";

import ManagerSetting from "./Components/Manager/Setting";
import ManagerChangepassword from "./Components/Manager/ChangePassword";

import ManagerMessage from "./Components/Manager/Message";
import ManagerNewMessage from "./Components/Manager/NewMessage";
import ManagerReadMessage from "./Components/Manager/ReadMessage";

import ManagerTransaction from "./Components/Manager/Transaction";

import ManagerLanguage from "./Components/Manager/Language";

//Manager User
import AgentHome from "./Components/Manager/User";
import AgentDetail from "./Components/Manager/User/UserDetailHome";
import AgentTransactions from "./Components/Manager/User/Transaction";
import AgentLabel from "./Components/Manager/User/Label";
import AgentDetails from "./Components/Manager/User/UserDetail";
import AgentDepositCredit from "./Components/Manager/User/DepositCredit";
import AgentWithdrawCredit from "./Components/Manager/User/WithdrawCredit";
import AgentMessage from "./Components/Manager/User/Message";
import AgentNewMessage from "./Components/Manager/User/NewMessage";
import AgentReadMessage from "./Components/Manager/User/ReadMessage";
import AgentReports from "./Components/Manager/User/Report";
import SuccessAgentreports from "./Components/Manager/User/Report/SuccessReport";

//Manager Add user
import Agent from "./Components/Manager/User/Users";
import AddAgent from "./Components/Manager/User/AddUser";
import AddedAgent from "./Components/Manager/User/AddUser/AddedUser";
import SicboDice from "./Components/SicBo/SicboDice";
import PlayerBetHistory from "./CommonComponents/PlayerBetHistory";
import TransactionRecord from "./CommonComponents/TransactionRecord";
import ResetPassword from "./CommonComponents/ResetPassword";
import AddDisplayname from "./CommonComponents/AddDisplayname";
import Languages from "./CommonComponents/Language";
import SoundVibrate from "./CommonComponents/SoundVibrate";

const composeEnhancers = composeWithDevTools({});
// const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, promise)));
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, promise, logger))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            exact
            path="Login"
            element={
              <LoginedIn>
                <Login />
              </LoginedIn>
            }
          />
          <Route
            exact
            path="/"
            element={
              <RequireAuthPlayer>
                <Start />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="DisplayName"
            element={
              <RequireAuthPlayer>
                <AddDisplayname />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="Languages"
            element={
              <RequireAuthPlayer>
                <Languages />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="SoundVibrate"
            element={
              <RequireAuthPlayer>
                <SoundVibrate />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="ChangePassword"
            element={
              <RequireAuthPlayer>
                <ChangePassword />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="ResetPassword"
            element={
              <RequireAuthPlayer>
                <ResetPassword />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="TransactionRecord"
            element={
              <RequireAuthPlayer>
                <TransactionRecord />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="BetHistory"
            element={
              <RequireAuthPlayer>
                <PlayerBetHistory />
              </RequireAuthPlayer>
            }
          />

          <Route
            exact
            path="Roulette"
            element={
              <RequireAuthPlayer>
                <HomeRoulette />
              </RequireAuthPlayer>
            }
          >
            <Route index element={<BettingFrame />} />
            <Route path="RouletteWheel" element={<RouletteWheel />} />
            <Route path="TopBets" element={<TopBets />} />
            <Route path="TopWinners" element={<TopWinners />} />
            <Route path="Statistic" element={<Statistic />} />
            <Route path="PastResult" element={<PastResult />} />
            <Route path="BettingGuide" element={<BettingGuide />} />
            <Route path="Error" element={<Error />} />
          </Route>

          <Route
            exact
            path="Baccarat"
            element={
              <RequireAuthPlayer>
                <HomeBaccarat />
              </RequireAuthPlayer>
            }
          >
            <Route index element={<BaccaratBetting />} />
            <Route path="TopBets" element={<TopBets />} />
            <Route path="TopWinners" element={<TopWinners />} />
            <Route path="Error" element={<Error />} />
            <Route path="BaccaratCardDeal" element={<BaccaratCardDeal />} />
          </Route>

          <Route
            exact
            path="SicBo"
            element={
              <RequireAuthPlayer>
                <HomeSicbo />
              </RequireAuthPlayer>
            }
          >
            <Route index element={<SicboBetting />} />
            <Route path="TopBets" element={<TopBets />} />
            <Route path="TopWinners" element={<TopWinners />} />
            <Route path="Error" element={<Error />} />
            <Route path="SicboDice" element={<SicboDice />} />
          </Route>

          {/* Agent */}
          <Route
            exact
            path="Agent"
            element={
              <RequireAuthAgent>
                <HomeAgent />
              </RequireAuthAgent>
            }
          >
            <Route index element={<AgentDashboard />} />

            <Route path="Report" exact element={<AgentReport />} />
            <Route
              path="SuccessReport"
              exact
              element={<SuccessAgentreport />}
            />

            <Route path="Setting" exact element={<Setting />} />
            <Route path="Setting/Language" exact element={<Language />} />
            <Route
              path="Setting/AgentChangePassword"
              exact
              element={<AgentChangePassword />}
            />

            <Route path="Message" element={<Message />} />
            <Route path="Message/NewMessage" element={<NewMessage />} />
            <Route path="Message/ReadMessage" element={<ReadMessage />} />

            <Route exact path="User" element={<HomeUser />}>
              <Route index element={<User />} />
              <Route path="Add" exact element={<AddUser />} />
              <Route path="Success/:userName" exact element={<AddedUser />} />

              <Route path="UserDetail/:userName" exact element={<HomeUser />}>
                <Route index element={<UserDetail />} />
                <Route path="DepositCredit" exact element={<DepositCredit />} />
                <Route
                  path="WithdrawCredit"
                  exact
                  element={<WithdrawCredit />}
                />
                <Route path="Transaction" exact element={<Transaction />} />

                <Route path="Message" exact element={<Message />} />
                <Route path="Message/NewMessage" element={<NewMessage />} />
                <Route path="Message/ReadMessage" element={<ReadMessage />} />

                <Route path="Report" exact element={<Report />} />
                <Route
                  path="SuccessUserReport"
                  exact
                  element={<SuccessUserReport />}
                />

                <Route path="Label" exact element={<Label />} />
                <Route path="BetHistory" exact element={<BetHistory />} />
                <Route path="Details" exact element={<PlayerDetails />} />
              </Route>
            </Route>

            <Route
              path="AgentTransaction"
              exact
              element={<AgentTransaction />}
            />
          </Route>

          {/* manager */}
          <Route
            exact
            path="Manager"
            element={
              <RequireAuthManager>
                <HomeManager />
              </RequireAuthManager>
            }
          >
            <Route index element={<ManagerDashboard />} />

            <Route path="Report" exact element={<ManagerReport />} />
            <Route
              path="SuccessReport"
              exact
              element={<SuccessManagerReport />}
            />

            <Route path="Setting" exact element={<ManagerSetting />} />
            <Route
              path="Setting/Language"
              exact
              element={<ManagerLanguage />}
            />
            <Route
              path="Setting/AdminChangepassword"
              exact
              element={<ManagerChangepassword />}
            />

            <Route path="Message" element={<ManagerMessage />} />
            <Route path="Message/NewMessage" element={<ManagerNewMessage />} />
            <Route
              path="Message/ReadMessage"
              element={<ManagerReadMessage />}
            />

            <Route exact path="User" element={<AgentHome />}>
              <Route index element={<Agent />} />
              <Route path="Add" exact element={<AddAgent />} />
              <Route path="Success/:userName" exact element={<AddedAgent />} />

              <Route path="UserDetail/:userName" exact element={<AgentHome />}>
                <Route index element={<AgentDetail />} />
                <Route
                  path="DepositCredit"
                  exact
                  element={<AgentDepositCredit />}
                />
                <Route
                  path="WithdrawCredit"
                  exact
                  element={<AgentWithdrawCredit />}
                />
                <Route
                  path="Transaction"
                  exact
                  element={<AgentTransactions />}
                />

                <Route path="Message" exact element={<AgentMessage />} />
                <Route
                  path="Message/NewMessage"
                  element={<AgentNewMessage />}
                />
                <Route
                  path="Message/ReadMessage"
                  element={<AgentReadMessage />}
                />

                <Route path="Report" exact element={<AgentReports />} />
                <Route
                  path="SuccessUserReport"
                  exact
                  element={<SuccessAgentreports />}
                />

                <Route path="Label" exact element={<AgentLabel />} />
                <Route path="Details" exact element={<AgentDetails />} />
              </Route>
            </Route>

            <Route
              path="ManagerTransaction"
              exact
              element={<ManagerTransaction />}
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
