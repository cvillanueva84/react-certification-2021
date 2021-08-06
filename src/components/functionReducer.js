

export const functionReducer = (state = [], action) => {
    switch (action.type) {
        case 'addSearch':
            return [...state, action.payload];
    
        default:
            return state;
    }
}