import React, { Component, useState } from 'react';
import ExpensePage from './components/showExpense/ExpensePage';
import IncomePage from './components/showIncome/IncomePage';
// const baseURL = 'http://localhost:9000';
// const userKey = uuid.v4();
export default function App() {
  const [userKey, setUserKey] = useState("batrong");
  return (
    <>
      <ExpensePage userKey = {userKey}/>
    </>
  )
};
