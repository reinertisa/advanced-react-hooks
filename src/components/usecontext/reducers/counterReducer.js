
export const initialCount = 0;
export function counterReducer(state, action) {
    switch(action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialCount;
        default:
            return state;
    }
}