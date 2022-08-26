import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sing = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text}<span>{sing}{Math.abs(transaction.amount)}TL</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}

export default Transaction