import { useEffect, useState } from "react";
import "./App.css";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import { DrawerHeader, Main } from "./components/UI/styledMUI";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./guard/ProtectedRoute";
import Shop from "./components/Display/Shop";

const initialExpenses = [
  {
    id: 1,
    title: "Petrol Gas",
    amount: 5,
    date: new Date(2022, 4, 27),
    category: "Essential",
  }, /// expense[0]
  {
    id: 2,
    title: "Cinema",
    amount: 5,
    date: new Date(2023, 4, 30),
    category: "Entertainment",
  }, /// expense[1]
  {
    id: 3,
    title: "Coffee",
    amount: 5,
    date: new Date(2024, 4, 20),
    category: "Entertainment",
  }, /// expense[2]
  {
    id: 4,
    title: "Dinner",
    amount: 20,
    date: new Date(2024, 4, 10),
    category: "Essential",
  }, /// expense[3]
];

function App() {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState(initialExpenses);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (isOpen) => {
    setIsDrawerOpen(isOpen);
  };

  const loginHandler = (username, password) => {
    ///// if (username === 'dffs' && password === 'dddd') => (true && true) => true
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedInStatus", "1");
    navigate("/shop");
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedInStatus");
    navigate("/");
  };

  const addExpenseHandler = (data) => {
    // setExpenses([...expenses, data]);
    setExpenses((previousState) => {
      return [data, ...previousState];
    });
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedInStatus") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <Navigation
          onLogoutHandler={logoutHandler}
          onOpenDrawer={openDrawer}
          isDrawerOpen={isDrawerOpen}
          isLoggedIn={isLoggedIn}
        />
      )}

      <Routes>
        <Route index element={<Login onLoginHandler={loginHandler}></Login>} />

        <Route element={<ProtectedRoute />}>
          <Route
            path="manage-product"
            element={
              <Main open={isDrawerOpen}>
                <DrawerHeader />
                <NewExpense
                  onAddExpenseHandler={addExpenseHandler}
                ></NewExpense>
                <Expense bien1={expenses}></Expense>
              </Main>
            }
          />
          <Route
            path="shop"
            element={
              <Main open={isDrawerOpen}>
                <DrawerHeader />
                <Shop expenses={expenses}></Shop>
              </Main>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
