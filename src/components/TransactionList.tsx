import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TransactionList =()=> {

    const abc : any = useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {abc.transactions.map((transaction:any) => (
                <li className={transaction.amount<0? 'minus':'plus'}>{transaction.text} <span>{Math.abs(transaction.amount)}</span>
                <button onClick={()=>abc.deleteTransaction(transaction.id)}className="delete-btn">x</button>
                    </li>
                
                ))}
             
      </ul>
        </>
    )
}


