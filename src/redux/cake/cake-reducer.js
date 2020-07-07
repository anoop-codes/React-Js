import { initialStateCake } from "./cake-inital-state";
import { BUY_CAKE } from "./cake-action-type";

export function cakeReducer(state = initialStateCake, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }

        default:
            return state;
    }
}