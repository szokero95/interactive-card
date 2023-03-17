import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard } from "../interfaces/card";

const initial: ICard = {
  owner: "",
  ccn: new Array(16).fill("0"),
  expMonth: "01",
  expYear: "23",
  cvc: new Array(3).fill("0").join("")
};

const cardSlice = createSlice({
  name: "card",
  initialState: initial,
  reducers: {
    changeOwner: (state, action: PayloadAction<string>) =>
      (state = { ...state, owner: action.payload }),
    changeMonth: (state, action: PayloadAction<string>) =>
      (state = { ...state, expMonth: action.payload }),
    changeYear: (state, action: PayloadAction<string>) =>
      (state = { ...state, expYear: action.payload }),
    changeCvc: (state, action: PayloadAction<string>) => {
      let temp = new Array(3).fill("0");
      action.payload.split("").map((ch, id) => {
        temp[id] = ch;
      });
      state.cvc = temp.join("");
    },

    changeCcn: (state, action: PayloadAction<string[]>) => {
      let temp: string[] = new Array(16).fill("0");
      action.payload.forEach((ch, id) => {
        temp[id] = ch;
      });
      state.ccn = temp;
    }
  }
});

export const {
  changeCcn,
  changeMonth,
  changeCvc,
  changeOwner,
  changeYear
} = cardSlice.actions;

export default cardSlice.reducer;
