import { cloneDeep } from "lodash";
import { roulette, sicbo, baccarat } from "../Constants/defaultValue";
import { getAccessToken, getUserDetail } from "../Utils";
const accessToken = getAccessToken();

let token = null;
let userDetail = null;
if (accessToken !== "undefined" && accessToken !== null) {
  token = accessToken;
  userDetail = getUserDetail();
}

const initialData = {
  gameReducer: {
    loading: false,
    error_msg: null,
    success_msg: null,
    transactionMessage: null,
    token: token,
    userDetail: userDetail,
    users: [],
    balance: null,
    accountId: null,
    messages: null,
    sessions: null,
    roulette: cloneDeep(roulette),
    sicbo: cloneDeep(sicbo),
    baccarat: cloneDeep(baccarat),
    isChipsActive: false,
    isSicboChipsActive: false,
    isBaccaratChipsActive: false,
    confirmBet: false,
    message: "Place Your Bet",
    topBets: [],
    rouletteResult: null,
    gameResultValue: null,
    winningChips: 0,
    applyChips: 0,
    gameResult: null,
    baccaratResult: null,
    baccaratCardLength: 0,
    isError: false,
    playerTotal: [],
    bankerTotal: [],
    sicboResult: null,
    rouletteAppliedChips: 0,
    sicboAppliedChips: 0,
    baccaratAppliedChips: 0,
  },
};

export default initialData;
