const { initalStateIceCream } = require("./iceCream-initalState");
const { BUY_ICECREAM } = require("./iceCream-action-types");

export const iceCreamReducer = (state = initalStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - action.payLoad
            }
        default:
            return state;
    }
}