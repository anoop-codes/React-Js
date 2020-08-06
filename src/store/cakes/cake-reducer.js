import { BUY_CAKE } from "./cake-action-types";
import { initalStateCake } from "./cake-initialState";

export const cakeReducer = (state = initalStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - action.payLoad
            }
        default:
            return state;
    }
}
