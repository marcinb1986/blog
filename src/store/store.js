import { createStore } from "redux";

const loginReducer = (state = {loggedIn:false},action) => {
    if(action.type === "login") {
        return {
            loggedIn:true
        }
    }
    else {
        return state
    }
};


export const store = createStore(loginReducer);
