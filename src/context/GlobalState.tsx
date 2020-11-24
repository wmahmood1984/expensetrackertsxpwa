import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
// initial state

interface mystate {
    transactions: [{
        id:number
        text: string
        amount: number
    }
    ]
}


const initialState: mystate = {
    transactions: [{
        id: 0,
        text:"abc",
        amount: 0

    }]
}

//create context

interface MyContextType  { transactions: any, deleteTransaction: Function, addTransaction:Function  }

export const GlobalContext = createContext(initialState);
 

// Provider Component

export const GlobalProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    

    function deleteTransaction(id:any){
        dispatch ({type: 'DELETE_TRANSACTION',
        payload: id});
    }

    function addTransaction(transaction:any){
        dispatch ({type: 'ADD_TRANSACTION',
        payload: transaction});
    }

    const value: MyContextType = {transactions: state.transactions,deleteTransaction,addTransaction}
    return (<GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>)
}