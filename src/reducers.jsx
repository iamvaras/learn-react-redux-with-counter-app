const initialValue = 0;
const reducer = (state = initialValue, action) => {
    switch(action.type){
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        case 'RESET' :
            return initialValue;
        case 'PLUSFIVE' :
            return state + action.payload
        case 'FIVETIMES' :
            return state * action.payload
        default :
            return state;
    }
}
export default reducer