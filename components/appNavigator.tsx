import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpensePage from './showExpense/ExpensePage';
import IncomePage from './showIncome/IncomePage';
const Stack = createNativeStackNavigator();
function appNavigator(){
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='ExpensePage'
              component={ExpensePage}
            />
            <Stack.Screen
              name='IncomePage'
              component={IncomePage}  
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
};
export default appNavigator