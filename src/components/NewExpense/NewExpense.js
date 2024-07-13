import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {

    const saveExpense = (data) => {
        const newData = {
            ...data,
            // title: '222',
            // amount: 222,
            // date: new Date(efew),
            id: Math.random()
        };
        props.onAddExpenseHandler(newData);
    }

    return (
        <>
            <ExpenseForm onSaveExpenseData={saveExpense} />
        </>
    );
}


export default NewExpense;