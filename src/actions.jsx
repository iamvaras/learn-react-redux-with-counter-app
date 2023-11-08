export const IncrementAction = () => async dispatch => {
    dispatch({
        type : 'INCREMENT',
    })
}

export const DecrementAction = () => async dispatch => {
    dispatch({
        type : 'DECREMENT',
    })
}
export const Reset = () => async dispatch => {
    dispatch({
        type : 'RESET'
    })
}
export const PlusFive = (value) => async dispatch => {
    dispatch({
        type : 'PLUSFIVE',
        payload : value
    })
}
export const FiveTimes = (value) => async dispatch => {
    dispatch({
        type : 'FIVETIMES',
        payload : value
    })
}