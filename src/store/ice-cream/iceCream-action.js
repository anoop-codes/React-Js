import { BUY_ICECREAM } from "./iceCream-action-types";

export function buyIceCream(count = 1) {
    return {
        type: BUY_ICECREAM,
        payLoad: count,
        //... can also any number of property , even a nested obj
    }
}
