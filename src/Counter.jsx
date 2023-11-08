import React from 'react'
import { connect } from 'react-redux'
import { IncrementAction, DecrementAction, Reset, PlusFive, FiveTimes } from './actions'

const Counter = ({local_variable, IncrementAction, DecrementAction, Reset, PlusFive, FiveTimes}) => {
  return (
    <center>
        <h1>{local_variable}</h1>
        <button onClick={DecrementAction}>-</button> &nbsp;
        <button onClick={Reset}>Reset</button> &nbsp;
        <button onClick={IncrementAction}>+</button> <br /> <br />
        <button onClick={()=>PlusFive(5)}> Plus 5 </button> &nbsp;
        <button onClick={()=>FiveTimes(5)}> 5 Times </button>
    </center>
  )
}
const mapStateToProps = state => ({
    local_variable : state
})
export default connect(mapStateToProps, {IncrementAction, DecrementAction, Reset, PlusFive, FiveTimes})(Counter)