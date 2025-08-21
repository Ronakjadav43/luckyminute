/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import {
  INPROGRESS,
  IS_AUTHENTICATED,
  ERROR,
  LOGOUT,
  GET_USER,
  GET_USER_BALANCE_MESSAGES,
  GET_GAME_TIME,
  CLEAR_BETSELECTION,
  SICBO_CLEAR_BETSELECTION,
  APPLY_CHIP,
  SICBO_APPLY_CHIP,
  CONFIRMING_BET,
  SICBO_CONFIRMING_BET,
  GET_USERS,
  COMPLETE,
  NEW_USER,
  SUCCESS_MESSAGE,
  GET_USER_TRANSACTION,
  BACCARAT_APPLY_CHIP,
  BACCARAT_CONFIRMING_BET,
  BACCARAT_CLEAR_BETSELECTION,
  GET_TOP_BETS,
  ROULETTE_RESULT,
  BETS_BY_SESSION,
  SHOW_WINNING_AREA,
  BETS_BY_BACCARAT_SESSION,
  BACCARAT_RESULT,
  SHOW_BACCARAT_WINNING_AREA,
  ERROR_PAGE,
  SHOW_SICBO_WINNING_AREA,
  BETS_BY_SICBO_SESSION,
  SICBO_RESULT,
  ROULETTE_BET_SELECTION,
  SICBO_BET_SELECTION,
  BACCARAT_BET_SELECTION,
  CLEAR_GAMERESULT_VALUE,
  SHOW_ROULETTE_RESULT_AREA,
  SHOW_BACCARAT_RESULT_AREA,
  SHOW_SICBO_RESULT_AREA,
} from "../Constants";
import initialState from "./initialState";
import { roulette, sicbo, baccarat } from "../Constants/defaultValue";
import { cloneDeep } from "lodash";
import { intToString } from "../CommonLibrary/CommonFunction";

export default function gameReducer(state = initialState.gameReducer, action) {
  let multipliers = null;
  switch (action.type) {
    case INPROGRESS:
      return {
        ...state,
        error_msg: "",
        success_msg: null,
        transactionMessage: null,
        loading: true,
        isError: false,
      };

    case COMPLETE:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
      };

    case ERROR:
      return {
        ...state,
        error_msg: action.data.error_msg + "E:" + Math.random(),
        success_msg: null,
        transactionMessage: null,
        loading: false,
      };

    case IS_AUTHENTICATED:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        token: action.data.accessToken,
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        token: null,
        roulette: roulette,
        sicbo: sicbo,
        baccarat: baccarat,
        isChipsActive: false,
        userDetail: null,
        users: [],
        newUser: null,
        balance: null,
        accountId: null,
        messages: null,
      };

    case GET_USER:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        userDetail: action.data.userDetail,
      };

    case GET_USER_BALANCE_MESSAGES:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        balance: Math.floor(action.data.userBalance.amount),
        accountId: action.data.userBalance.accountId,
        messages: 0,
      };

    case GET_GAME_TIME:
      return {
        ...state,
        error_msg: null,
        loading: false,
        sessions: cloneDeep(action.data.sessions),
        gameResultValue: null,
        rouletteResult: null,
        baccaratResult: null,
        gameResult: null,
        playerTotal: [],
        bankerTotal: [],
        sicboResult: null,
        roulette: cloneDeep(roulette),
        baccarat: cloneDeep(baccarat),
        sicbo: cloneDeep(sicbo),
        isError: false,
        baccaratCardLength: 0,
      };

    case GET_USER_TRANSACTION:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        creditTransactions: action.data.creditTransactions,
      };

    case GET_TOP_BETS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        topBets: action.data,
      };

    // Roulette
    case ROULETTE_BET_SELECTION:
      let isChipsActive = false;
      state.roulette.map((data) => {
        data.isActive = false;
        if (data.value === action.data.value) {
          data.isActive = true;
          isChipsActive = true;
        }
      });
      return {
        ...state,
        roulette: [...state.roulette],
        isChipsActive,
        rouletteMessage: action.data.value,
      };

    case SICBO_BET_SELECTION:
      let isSicboChipsActive = false;
      state.sicbo.map((data) => {
        data.isActive = false;
        if (data.value === action.data.value) {
          data.isActive = true;
          isSicboChipsActive = true;
        }
      });
      return {
        ...state,
        sicbo: [...state.sicbo],
        isSicboChipsActive,
        rouletteMessage: action.data.value,
      };

    case BACCARAT_BET_SELECTION:
      let isBaccaratChipsActive = false;
      state.baccarat.map((data) => {
        data.isActive = false;
        if (data.backEndValue === action.data.backEndValue) {
          data.isActive = true;
          isBaccaratChipsActive = true;
        }
      });
      return {
        ...state,
        baccarat: [...state.baccarat],
        isBaccaratChipsActive,
        rouletteMessage: action.data.value,
      };

    case SICBO_APPLY_CHIP:
      if (state.isSicboChipsActive) {
        const FindActiveSelectedBet = state.sicbo.find(
          (data) => data.isActive === true
        );
        FindActiveSelectedBet.activeChip += parseInt(action.data);
        return {
          ...state,
          sicbo: [...state.sicbo],
          isSicboChipsActive: true,
          confirmBet: true,
          rouletteMessage: "Please Confirm Bet",
        };
      } else {
        return {
          ...state,
        };
      }

    case BACCARAT_APPLY_CHIP:
      if (state.isBaccaratChipsActive) {
        const FindActiveSelectedBet = state.baccarat.find(
          (data) => data.isActive === true
        );
        FindActiveSelectedBet.activeChip += parseInt(action.data);
        return {
          ...state,
          baccarat: [...state.baccarat],
          isBaccaratChipsActive: true,
          confirmBet: true,
          rouletteMessage: "Please Confirm Bet",
        };
      } else {
        return {
          ...state,
        };
      }

    case APPLY_CHIP:
      if (state.isChipsActive) {
        const FindActiveSelectedBet = state.roulette.find(
          (data) => data.isActive === true
        );
        FindActiveSelectedBet.activeChip += parseInt(action.data);
        return {
          ...state,
          roulette: [...state.roulette],
          isChipsActive: true,
          confirmBet: true,
          rouletteMessage: "Please Confirm Bet",
        };
      } else {
        return {
          ...state,
        };
      }

    case CLEAR_BETSELECTION:
      state.roulette.map((data) => {
        data.isActive = false;
        data.activeChip = null;
      });
      return {
        ...state,
        roulette: [...state.roulette],
        isChipsActive: false,
        confirmBet: false,
      };

    case BETS_BY_SESSION:
      let appliedChip = 0;
      state.roulette.map((roulette) => {
        roulette.isActive = false;
        roulette.chip = null;
        action.data.map((response) => {
          if (response.fieldName === roulette.backEndValue) {
            appliedChip += parseInt(response.amount);
            roulette.chip += parseInt(response.amount);
          }
        });
      });

      return {
        ...state,
        loading: false,
        isChipsActive: false,
        confirmBet: false,
        applyChips: appliedChip,
        roulette: [...state.roulette],
        rouletteAppliedChips: appliedChip,
      };

    case BETS_BY_BACCARAT_SESSION:
      let baccaratAppliedChip = 0;
      state.baccarat.map((baccarat) => {
        baccarat.isActive = false;
        baccarat.chip = null;
        action.data.map((response) => {
          if (response.fieldName === baccarat.backEndValue) {
            baccaratAppliedChip += parseInt(response.amount);
            baccarat.chip += parseInt(response.amount);
          }
        });
      });
      return {
        ...state,
        loading: false,
        isChipsActive: false,
        confirmBet: false,
        applyChips: baccaratAppliedChip,
        baccarat: [...state.baccarat],
        baccaratAppliedChips: baccaratAppliedChip,
      };

    case BETS_BY_SICBO_SESSION:
      let sicboAppliedChip = 0;
      state.sicbo.map((sicbo) => {
        sicbo.isActive = false;
        sicbo.chip = null;
        action.data.map((response) => {
          if (response.fieldName == sicbo.backEndValue) {
            sicboAppliedChip += parseInt(response.amount);
            sicbo.chip += parseInt(response.amount);
          }
        });
      });
      return {
        ...state,
        loading: false,
        isChipsActive: false,
        confirmBet: false,
        applyChips: sicboAppliedChip,
        sicbo: [...state.sicbo],
        sicboAppliedChips: sicboAppliedChip,
      };

    case CONFIRMING_BET:
      state.roulette.map((data) => {
        data.isActive = false;
        if (data.activeChip !== null) {
          state.rouletteAppliedChips += parseInt(data.activeChip);
          data.chip += parseInt(data.activeChip);
          data.activeChip = null;
          data.isConfirm = true;
        }
      });
      //Need to Fillter result and Display
      return {
        ...state,
        loading: false,
        roulette: [...state.roulette],
        confirmBet: false,
        isChipsActive: false,
        rouletteMessage: "Bet Accepted",
      };

    case SICBO_CONFIRMING_BET:
      state.sicbo.map((data) => {
        data.isActive = false;
        if (data.activeChip !== null) {
          state.sicboAppliedChips += parseInt(data.activeChip);
          data.chip += parseInt(data.activeChip);
          data.activeChip = null;
          data.isConfirm = true;
        }
      });
      //Need to Fillter result and Display
      return {
        ...state,
        loading: false,
        sicbo: [...state.sicbo],
        confirmBet: false,
        isSicboChipsActive: false,
        rouletteMessage: "Bet Accepted",
        sicboAppliedChips: state.sicboAppliedChips,
      };

    case BACCARAT_CONFIRMING_BET:
      state.baccarat.map((data) => {
        data.isActive = false;
        if (data.activeChip !== null) {
          data.chip += parseInt(data.activeChip);
          state.baccaratAppliedChips += parseInt(data.activeChip);
          data.activeChip = null;
          data.isConfirm = true;
        }
      });
      //Need to Fillter result and Display
      return {
        ...state,
        loading: false,
        baccarat: [...state.baccarat],
        confirmBet: false,
        isBaccaratChipsActive: false,
        rouletteMessage: "Bet Accepted",
        baccaratAppliedChips: state.baccaratAppliedChips,
      };

    case SICBO_CLEAR_BETSELECTION:
      state.sicbo.map((data) => {
        data.isActive = false;
        data.activeChip = null;
      });
      return {
        ...state,
        sicbo: [...state.sicbo],
        isSicboChipsActive: false,
        confirmBet: false,
      };

    case BACCARAT_CLEAR_BETSELECTION:
      state.baccarat.map((data) => {
        data.isActive = false;
        data.activeChip = null;
      });
      return {
        ...state,
        baccarat: [...state.baccarat],
        isBaccaratChipsActive: false,
        confirmBet: false,
      };

    case SHOW_WINNING_AREA:
      let result = state.gameResult?.field;
      multipliers = state.gameResult?.multipliers;
      let winAmount = 0;
      if (result === 0) {
        result = intToString(result);
      }
      state.roulette.map((roulette) => {
        if (result) {
          if (roulette.chip !== null) {
            if (multipliers[roulette.backEndValue] !== 0) {
              roulette.isConfirm = true;
              roulette.chip =
                roulette.chip * multipliers[roulette.backEndValue];
              winAmount += roulette.chip;
            } else {
              roulette.chip = null;
            }
          }
        }
      });

      // state.roulette.map((roulette) => {
      //   if (result) {
      //     if (roulette.backEndValue == `field_${result}`) {
      //       if (roulette.chip !== null) {
      //         roulette.isConfirm = true;
      //         roulette.chip = roulette.chip * 18;
      //         winAmount += roulette.chip;
      //       } else {
      //         roulette.chip = null;
      //       }
      //     } else if (roulette.backEndValue == "low") {
      //       if (inRange(result, 1, 10)) {
      //         if (roulette.chip !== null) {
      //           roulette.isConfirm = true;
      //           roulette.chip = roulette.chip * 2;
      //           winAmount += roulette.chip;
      //         }
      //       } else {
      //         roulette.chip = null;
      //       }
      //     } else if (roulette.backEndValue == "high") {
      //       if (inRange(result, 10, 19)) {
      //         if (roulette.chip !== null) {
      //           roulette.isConfirm = true;
      //           roulette.chip = roulette.chip * 2;
      //           winAmount += roulette.chip;
      //         }
      //       } else {
      //         roulette.chip = null;
      //       }
      //     } else if (roulette.backEndValue == "even") {
      //       if (result != 0 && result % 2 === 0) {
      //         if (roulette.chip !== null) {
      //           roulette.isConfirm = true;
      //           roulette.chip = roulette.chip * 2;
      //           winAmount += roulette.chip;
      //         }
      //       } else {
      //         roulette.chip = null;
      //       }
      //     } else if (roulette.backEndValue == "odd") {
      //       if (result != 0 && result % 2 !== 0) {
      //         if (roulette.chip !== null) {
      //           roulette.isConfirm = true;
      //           roulette.chip = roulette.chip * 2;
      //           winAmount += roulette.chip;
      //         }
      //       } else {
      //         roulette.chip = null;
      //       }
      //     } else if (roulette.backEndValue === colour) {
      //       if (roulette.chip !== null) {
      //         roulette.isConfirm = true;
      //         roulette.chip = roulette.chip * 2;
      //         winAmount += roulette.chip;
      //       }
      //     } else {
      //       roulette.chip = null;
      //     }
      //   } else {
      //     roulette.chip = null;
      //   }
      // });

      return {
        ...state,
        isChipsActive: false,
        confirmBet: false,
        error_msg: null,
        success_msg: null,
        winningChips: winAmount,
        roulette: [...state.roulette],
      };

    case SHOW_BACCARAT_WINNING_AREA:
      let baccaratWinner = state.gameResult?.winner;
      let baccarat_Multipliers = state.gameResult?.multipliers;
      let winningAmount = 0;
      state.baccarat.map((baccarat) => {
        if (baccaratWinner) {
          if (baccarat.chip !== null) {
            if (baccarat_Multipliers[baccarat.backEndValue] !== 0) {
              baccarat.isConfirm = true;
              baccarat.chip =
                baccarat.chip * baccarat_Multipliers[baccarat.backEndValue];
              winningAmount += baccarat.chip;
            } else {
              baccarat.chip = null;
            }
          }
          // if (baccarat.backEndValue === baccaratWinner) {
          //   if (baccarat.chip !== null) {
          //     baccarat.isConfirm = true;
          //     if (baccaratWinner === "tie") {
          //       baccarat.chip = baccarat.chip + baccarat.chip * 8;
          //       winningAmount += baccarat.chip;
          //     } else {
          //       baccarat.chip = baccarat.chip + baccarat.chip * 2;
          //       winningAmount += baccarat.chip;
          //     }
          //   }
          // } else {
          //   baccarat.chip = null;
          // }
        }
      });
      return {
        ...state,
        isChipsActive: false,
        confirmBet: false,
        error_msg: null,
        success_msg: null,
        winningChips: winningAmount,
        baccarat: [...state.baccarat],
      };

    case SHOW_SICBO_WINNING_AREA:
      let sicbowinningAmount = 0;
      let sicbo_Multipliers = state.gameResult?.multipliers;
      // let tripleDice = null;
      // state.sicboResult.map((item) => (sumOfDiceNumber += item));
      // if (
      //   (state.sicboResult[0] === state.sicboResult[1]) ===
      //   state.sicboResult[2]
      // ) {
      //   tripleDice = `triple${state.sicboResult[0]}`;
      // }
      state.sicbo.map((sicbo) => {
        if (state.sicboResult) {
          if (sicbo.chip !== null) {
            if (sicbo_Multipliers[sicbo.backEndValue] !== 0) {
              sicbo.isConfirm = true;
              sicbo.chip = sicbo.chip * sicbo_Multipliers[sicbo.backEndValue];
              sicbowinningAmount += sicbo.chip;
            } else {
              sicbo.chip = null;
            }
          }
        }
      });
      //     if (sicbo.backEndValue === "range_small") {
      //       if (inRange(sumOfDiceNumber, 4, 11)) {
      //         if (sicbo.chip !== null) {
      //           sicbo.isConfirm = true;
      //           sicbo.chip += sicbo.chip;
      //           sicbowinningAmount += sicbo.chip;
      //         }
      //       } else {
      //         sicbo.chip = null;
      //       }
      //     } else if (sicbo.backEndValue === "range_big") {
      //       if (inRange(sumOfDiceNumber, 11, 18)) {
      //         if (sicbo.chip !== null) {
      //           sicbo.isConfirm = true;
      //           sicbo.chip += sicbo.chip;
      //           sicbowinningAmount += sicbo.chip;
      //         }
      //       } else {
      //         sicbo.chip = null;
      //       }
      //     } else if (sicbo.backEndValue === "triple_any") {
      //       if (tripleDice !== null) {
      //         if (sicbo.chip !== null) {
      //           sicbo.chip = sicbo.chip * 24;
      //           sicbowinningAmount += sicbo.chip;
      //         }
      //       } else {
      //         sicbo.chip = null;
      //       }
      //     } else if (sicbo.backEndValue === tripleDice) {
      //       if (sicbo.chip !== null) {
      //         sicbo.isConfirm = true;
      //         sicbo.chip = sicbo.chip * 150;
      //         sicbowinningAmount += sicbo.chip;
      //       } else {
      //         sicbo.chip = null;
      //       }
      //     } else if (sicbo.backEndValue == `sum_${sumOfDiceNumber}`) {
      //       if (sicbo.chip !== null) {
      //         sicbo.isConfirm = true;
      //         if (sumOfDiceNumber === "sum_4" || sumOfDiceNumber === "sum_17") {
      //           sicbo.chip = sicbo.chip * 50;
      //           sicbowinningAmount += sicbo.chip;
      //         } else if (
      //           sumOfDiceNumber === "sum_5" ||
      //           sumOfDiceNumber === "sum_16"
      //         ) {
      //           sicbo.chip = sicbo.chip * 18;
      //           sicbowinningAmount += sicbo.chip;
      //         } else if (
      //           sumOfDiceNumber === "sum_6" ||
      //           sumOfDiceNumber === "sum_15"
      //         ) {
      //           sicbo.chip = sicbo.chip * 14;
      //           sicbowinningAmount += sicbo.chip;
      //         } else if (
      //           sumOfDiceNumber === "sum_7" ||
      //           sumOfDiceNumber === "sum_14"
      //         ) {
      //           sicbo.chip = sicbo.chip * 12;
      //           sicbowinningAmount += sicbo.chip;
      //         } else if (
      //           sumOfDiceNumber === "sum_8" ||
      //           sumOfDiceNumber === "sum_13"
      //         ) {
      //           sicbo.chip = sicbo.chip * 8;
      //           sicbowinningAmount += sicbo.chip;
      //         } else if (
      //           sumOfDiceNumber === "sum_9" ||
      //           sumOfDiceNumber === "sum_12"
      //         ) {
      //           sicbo.chip = sicbo.chip * 6;
      //           sicbowinningAmount += sicbo.chip;
      //         } else {
      //           sicbo.chip = sicbo.chip * 6;
      //           sicbowinningAmount += sicbo.chip;
      //         }
      //       } else {
      //         sicbo.chip = null;
      //       }
      //     } else {
      //       let count = 0;
      //       state.sicboResult.map((result) => {
      //         if (
      //           (sicbo.backEndValue === "single_1" && result === 1) ||
      //           (sicbo.backEndValue === "single_2" && result === 2) ||
      //           (sicbo.backEndValue === "single_3" && result === 3) ||
      //           (sicbo.backEndValue === "single_4" && result === 4) ||
      //           (sicbo.backEndValue === "single_5" && result === 5) ||
      //           (sicbo.backEndValue === "single_6" && result === 6)
      //         ) {
      //           count++;
      //         }
      //       });

      //       if (count > 0 && sicbo.chip !== null) {
      //         sicbo.isConfirm = true;
      //         if (count === 1) {
      //           sicbo.chip += sicbo.chip;
      //           sicbowinningAmount += sicbo.chip;
      //         }
      //         if (count === 2) {
      //           sicbo.chip = sicbo.chip * 3;
      //           sicbowinningAmount += sicbo.chip;
      //         }
      //         if (count === 3) {
      //           sicbo.chip = sicbo.chip * 4;
      //           sicbowinningAmount += sicbo.chip;
      //         }
      //       } else {
      //         sicbo.chip = null;
      //       }
      //       count = 0;
      //     }
      //   }
      // });
      return {
        ...state,
        isChipsActive: false,
        confirmBet: false,
        error_msg: null,
        success_msg: null,
        winningChips: sicbowinningAmount,
        baccarat: [...state.baccarat],
      };

    case ROULETTE_RESULT:
      let rouletteResult = action.data?.results?.roulette?.field;
      let rouletteValue = action.data?.results?.roulette?.field;

      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        rouletteResult: rouletteResult,
        gameResult: action.data?.results?.roulette,
        gameResultValue: rouletteValue.toString(),
      };

    case SHOW_ROULETTE_RESULT_AREA:
      multipliers = state.gameResult.multipliers;
      if (state.rouletteResult === 0) {
        state.rouletteResult = intToString(state.rouletteResult);
      }
      state.roulette.map((roulette) => {
        roulette.isConfirm = false;
        if (state.rouletteResult) {
          if (multipliers[roulette.backEndValue] !== 0) {
            roulette.isActive = true;
          }
        }
      });

      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        roulette: [...state.roulette],
      };

    case BACCARAT_RESULT:
      const baccaratResult = action.data?.results?.baccarat?.winner;
      const baccaratResultValue = action.data?.results?.baccarat?.winner;
      const playerCards = action.data?.results?.baccarat?.playerCards;
      const bankerCards = action.data?.results?.baccarat?.bankerCards;
      let cardLength = 0;
      let bankerCardTotal = [];
      let playerCardTotal = [];
      let playerTotal = 0;
      let bankerTotal = 0;

      playerCards.map((card) => {
        cardLength++;
        if (card.figure === "A") {
          playerTotal += 1;
        } else if (
          card.figure === "J" ||
          card.figure === "Q" ||
          card.figure === "K"
        ) {
          playerTotal += 0;
        } else {
          playerTotal += Number(card.figure);
        }
        playerCardTotal.push(playerTotal % 10);
      });

      bankerCards.map((card) => {
        cardLength++;
        if (card.figure === "A") {
          bankerTotal += 1;
        } else if (
          card.figure === "J" ||
          card.figure === "Q" ||
          card.figure === "K"
        ) {
          bankerTotal += 0;
        } else {
          bankerTotal += Number(card.figure);
        }
        bankerCardTotal.push(bankerTotal % 10);
      });

      if (playerTotal >= 10) {
        playerTotal = playerTotal %= 10;
      }

      if (bankerTotal >= 10) {
        bankerTotal = bankerTotal %= 10;
      }

      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        playerTotal: playerCardTotal,
        bankerTotal: bankerCardTotal,
        baccaratResult: baccaratResult,
        gameResultValue: baccaratResultValue,
        gameResult: action.data?.results?.baccarat,
        baccaratCardLength: cardLength,
      };

    case SHOW_BACCARAT_RESULT_AREA:
      // const baccaratResult = action.data?.results?.baccarat?.winner;
      // const baccaratResultValue = action.data?.results?.baccarat?.winner;
      multipliers = state.gameResult.multipliers;

      state.baccarat.map((baccarat) => {
        baccarat.isConfirm = false;
        if (state.baccaratResult) {
          if (multipliers[baccarat.backEndValue] !== 0) {
            baccarat.isActive = true;
          }
        }
      });

      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        baccarat: [...state.baccarat],
      };

    case SICBO_RESULT:
      const sicboResult = action.data?.results?.sicbo?.dice;
      const sicboResultValue = action.data?.results?.sicbo?.dice;

      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        sicboResult: sicboResult,
        gameResult: action.data?.results?.sicbo,
        gameResultValue: sicboResultValue,
      };

    case SHOW_SICBO_RESULT_AREA:
      multipliers = state.gameResult.multipliers;

      state.sicbo.map((sicbo) => {
        sicbo.isConfirm = false;
        if (state.sicboResult) {
          if (multipliers[sicbo.backEndValue] !== 0) {
            sicbo.isActive = true;
          }
        }
      });

      return {
        ...state,
        loading: false,
        error_msg: null,
        success_msg: null,
        baccarat: [...state.baccarat],
      };

    case ERROR_PAGE:
      return {
        ...state,
        loading: false,
        isError: true,
        error_msg: "Could Not Fetch Result",
        success_msg: null,
        roulette: [...state.roulette],
        baccarat: [...state.baccarat],
        sicbo: [...state.sicbo],
        rouletteAppliedChips: 0,
        sicboAppliedChips: 0,
        baccaratAppliedChips: 0,
      };

    case GET_USERS:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        users: action.data.users,
      };

    case NEW_USER:
      return {
        ...state,
        error_msg: null,
        success_msg: null,
        transactionMessage: null,
        loading: false,
        newUser: action.data.user,
      };

    case SUCCESS_MESSAGE:
      return {
        ...state,
        error_msg: null,
        success_msg: action.data.message,
        loading: false,
      };

    case CLEAR_GAMERESULT_VALUE:
      return {
        ...state,
        gameResultValue: null,
      };

    default:
      return state;
  }
}
