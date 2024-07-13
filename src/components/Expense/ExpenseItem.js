import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) { /// Expense 
    /// props.expense = {id: 1, title: 'Petrol Gas', amount: 5, date: new Date(2024, 4, 27)}

    var [title, setTitle] = useState(props.expense.title);
    /// gan gia tri --> setTitle
    /// lay gia tri --> goi bien title
    /// gia tri khoi tao --> props.expense.title


    const clickHandler = () => {
        setTitle(title + ' has changed');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            {/* <div>{props.expense.date.toISOString()}</div> */}
            <ExpenseDate date={props.expense.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.expense.category} - {title}</h2>
                <div className='expense-item__price'>$ {props.expense.amount}</div>
                <button onClick={clickHandler}  >Click me</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;