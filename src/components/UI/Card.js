import './Card.css';

function Card(props) {
    var classes = 'card ' + props.className; /// 'card expense-item'
    /*props.children 
     * <ExpenseDate date={props.expense.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>$ {props.expense.amount}</div>
            </div>
     */
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;