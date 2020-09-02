import React, { createContext, useContext, useReducer } from 'react';

//preparing the data layer
//initalstate means what's the app look for

export const StateContext = createContext();

export const StateProvider = ({ reducer, initalState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initalState)}>
		{children}
	</StateContext.Provider>
);

//hook which allow us to pull information from data layer
export const useStateValue = () => useContext(StateContext);
