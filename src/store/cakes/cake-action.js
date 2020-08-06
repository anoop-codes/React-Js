import { BUY_CAKE } from "./cake-action-types";

export function buyCake(count = 1) {
    return {
        type: BUY_CAKE,
        payLoad: count
    }
}
