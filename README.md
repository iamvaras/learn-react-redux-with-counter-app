What is Redux?
	• Redux is an open source JS library for managing application state.
	• Provides centralized store means components direct access the data.
	
	
Three core concepts 
	• Action 
		○ Action is the only way our application can interact with store
		○ An Action is an object with type property
		○ Changes in the state of the application
	• Reducers 
		○ Specify how the app's state changes in response to actions sent to the store. 
	• Store 
		○ Holds the state of our application
		○ One store for entire application.
		○ Responsibilities
			○ Holds application state
			○ Allows access to state via getState()
			○ Allows state to be updated via dispatch(action)
			○ Registers listeners via subscribe (listener)
			○ Handles unregistering of listeners via the function returned by subscribe (listener)
		


	


Packages required to use Redux in React
	○ npm i redux  { createStore, applyMiddleware }
	○ npm i react-redux
	○ npm i redux-thunk { thunk }
	○ npm i redux-devtools-extension { composeWithDevTools }


		
Steps for creating small project
	1. Create counter.jsx
	
	2. Create Actions in actions.jsx
	
	3. Create reducer function in Reducer.jsx
	
	4. Create store in store.jsx 
		○ createStore applyMiddleware -> redux
		○ thunk -> redux-thunk 
		○ composeWithDevTools -> redux-devtools-extension
		
	5. Import store & Provider in index.js
	
	6. Import connect & actions in Counter.js
		○ mapStateToProps => Utilizing values in store
		○ mapDispatchToProps => Utilizing actions types in store


Above Example Code
	Index.js ---------------------------------------------------------------
	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import App from './App';
	import store from './redux/store';
	import { Provider } from 'react-redux';
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
	  <React.StrictMode>
	    <Provider store={store} >
	      <App />
	    </Provider>
	  </React.StrictMode>
	);
	
	Counter.jsx -------------------------------------------------------------
	
	import React from 'react'
	import { connect } from 'react-redux'
	import { IncrementAction, DecrementAction, Reset, PlusFive, FiveTimes } from './redux/actions'
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
	
	actions.jsx -------------------------------------------------------------
	
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
	
	reducer.jsx ---------------------------------------------------------------
	
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
	
	store.jsx -----------------------------------------------------------------
	
	import { createStore, applyMiddleware } from 'redux';
	import { composeWithDevTools } from 'redux-devtools-extension';
	import thunk from 'redux-thunk';
	import reducer from './reducer';
	// const middleware = [thunk]
	
	const store = createStore(
	    reducer,
	    composeWithDevTools(applyMiddleware(thunk))
	)
	export default store
	
	















![image](https://github.com/iamvaras/learn-react-redux-with-counter-app/assets/26010448/3b03e86d-9ff4-4b79-9c19-3941bb080ddf)
