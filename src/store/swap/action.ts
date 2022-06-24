import { createAction } from "@reduxjs/toolkit";

export type SelectedTokenType = "from" | "to";

export const updateSelectedToken = createAction<{
    type: SelectedTokenType;
    token: any;
  }>("swap/updateSelectedToken");
  export const updateSelectionMode = createAction<{ type: SelectedTokenType }>(
    "swap/updateSelectionMode"
  );
  export const updateSwapData = createAction<{
    amountIn: any;
    potentialOutput: any
  }>("swap/updateSwapData");

  export const toggleSelectedTokens = createAction("swap/toggleSelectedTokens");
  export const toggelIsGasLess = createAction("swap/toggelIsGasLess");
  export const updateAmmModaler = createAction<{ ammModaler: any }>(
    "swap/updateAmmModaler"
  );