import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLoggedInState = {
  loggedIn: false,
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: initialLoggedInState,
  reducers: {
    withLogIn(state) {
      state.loggedIn = true;
    },
    withoutLogIn(state) {
      state.loggedIn = false;
    },
  },
});

const initialLoggedOutState = {
  loggedIn: true,
};

const logOutSlice = createSlice({
  name: "logOut",
  initialState: initialLoggedOutState,
  reducers: {
    logOut(state) {
      state.loggedIn = false;
    },
  },
});

// const loginReducer = (
//   state = initialState,
//   action: PayloadAction<boolean>
// ) => {
//   if (action.type === "withLogIn") {
//     return {
//       loggedIn: true,
//     };
//   }

//   if (action.type === "withoutLogIn") {
//     return {
//       loggedIn: false,
//     };
//   }

//   if (action.type === "logout") {
//     return {
//       loggedIn: false,
//     };
//   } else {
//     return state;
//   }
// };

export const loggedInActions = loggedInSlice.actions;
export const logOutAction = logOutSlice.actions;

export const store = configureStore({
  reducer: { loggedIn: loggedInSlice.reducer, logOut: logOutSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
