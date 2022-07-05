import React, {Component} from 'react';
import ExpensePage from './components/showExpense/ExpensePage';
import IncomePage from './components/showIncome/IncomePage';
export default class App extends React.Component {
  render(){
    return(
      <ExpensePage/>
    )
  }
}