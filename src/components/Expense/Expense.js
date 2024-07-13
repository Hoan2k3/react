import { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import CategoryFilter from './CategoryFilter';
import { Button, Stack } from '@mui/material';


function Expense(props) { /// Expense[]
    const [filterYear, setFilterYear] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const getYearFilter = (year) => {
        // console.log(year);
        setFilterYear(year);
    }

    const getCategoryFilter = (category) => {
        console.log(category);
        setFilterCategory(category);
    }

    return (
        <Card className="expenses">
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={2} justifyContent="flex-start">
                    <ExpenseFilter onGetYearFilter={getYearFilter}></ExpenseFilter>
                    <CategoryFilter onGetCategoryFilter={getCategoryFilter}></CategoryFilter>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Button 
                        variant="contained" 
                        sx={{backgroundColor: '#4b4b4b', borderRadius: '10px'}}
                        onClick={() => {setFilterYear(''); setFilterCategory('');}}
                    >Reset</Button>
                </Stack>
            </Stack>
            
            {/* if (filterYear === '') then  */}
            {filterYear === '' && filterCategory === ''
                ? props.bien1.map(item => (
                    <ExpenseItem
                        key={item.id}
                        expense={item}
                    ></ExpenseItem>))
                : filterYear === '' && filterCategory !== '' 
                    ? props.bien1.filter(e => e.category === filterCategory).map(item => (
                        <ExpenseItem
                            key={item.id}
                            expense={item}
                        ></ExpenseItem>))
                    : filterYear !== '' && filterCategory !== ''
                        // ? props.bien1.filter(e => e.date.getFullYear() === filterYear && e.category === filterCategory).map(item => (
                        ? props.bien1.filter(e => e.date.getFullYear() === filterYear).filter(e => e.category === filterCategory).map(item => (
                            <ExpenseItem
                                key={item.id}
                                expense={item}
                            ></ExpenseItem>))
                        : props.bien1.filter(e => e.date.getFullYear() === filterYear).map(item => (
                            <ExpenseItem
                                key={item.id}
                                expense={item}
                            ></ExpenseItem>))
            }

        </Card>
    );
}

export default Expense;