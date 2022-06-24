import { createReducer } from "@reduxjs/toolkit";
import {
    SelectedTokenType,
    updateSelectionMode,
    updateSelectedToken,
    updateSwapData,
    toggleSelectedTokens,
    updateAmmModaler,
} from './action';

export interface SwapState {
    selectionMode: SelectedTokenType | undefined;
    fromToken: any;
    toToken: any;
    swapData: any;
    ammModaler: any | undefined;
}

export const initialState: SwapState = {
    selectionMode: undefined,
    fromToken: undefined,
    toToken: undefined,
    swapData: {},
    ammModaler: {
      modal: false,
      addedValue: false,
      unstake: true,
      sucess: false,
      error: false,
      loder: false,
      reward: false,
      msg: "",
      stakMsg: "",
      transactionStatus: "initial",
    },
};

  export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateSelectedToken, (state, action) => {
      if (action.payload.type === "from") {
        // if payload is already selected in "to", swap them
        if (action.payload?.token?.symbol === state.toToken?.symbol) {
          state.toToken = state.fromToken;
        }
        state.fromToken = action.payload.token;
      } else {
        // if payload is already selected in "from", swap them
        if (action.payload?.token?.symbol === state.fromToken?.symbol) {
          state.fromToken = state.toToken;
        }
        state.toToken = action.payload.token;
      }
    })
    .addCase(toggleSelectedTokens, (state) => {
      const temp = state.fromToken;
      state.fromToken = state.toToken;
      state.toToken = temp;
    })
    .addCase(updateSelectionMode, (state, action) => {
      state.selectionMode = action.payload.type;
    })
    .addCase(updateSwapData, (state, action) => {
      const { amountIn, potentialOutput } = action.payload;
      state.swapData = {
        amountIn,
        potentialOutput
      };
    })
    .addCase(
      updateAmmModaler,
      (state, { payload: { ammModaler } }) => {
        return {
          ...state,
          ammModaler,
        };
      })
);