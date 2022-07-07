import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Alert, TouchableOpacity, Button } from 'react-native';
// import appNavigator from '../appNavigator';
// import IncomePage from '../showIncome/IncomePage';
// import { NavigationScreenProp } from 'react-navigation';
import { useState, useCallback } from 'react';
// import MonthPicker from 'react-native-month-year-picker';
import { getListExpenseApi } from '../../services/ExpenseApi';
import styles from '../styles';
function ExpensePage({ userKey }: { userKey: string }) {
  // const [date, setDate] = useState(new Date());
  // const [show, setShow] = useState(false);
  const [listExpense, setListExpense] = useState<any>({});

  // const showPicker = useCallback((value) => setShow(value), []);

  // const onValueChange = useCallback(
  //   (event, newDate) => {
  //     const selectedDate = newDate || date;

  //     showPicker(false);
  //     setDate(selectedDate);
  //   },
  //   [date, showPicker],
  // );
  const getListExpense = useCallback(async () => {
    try {
      const response = await getListExpenseApi(userKey);
      setListExpense(response.data.data)
    } catch(error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    getListExpense();
  }, [])
  const total = (Array.from(listExpense).reduce((total : any, currentValue: any) => total=total+currentValue?.amount,0))
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeftBox}>
          <TouchableOpacity>
            <Text style={{fontSize:14,color:'grey'}}> {'<'} Thu nhập  </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Chi tiêu
          </Text>
        </View>
        <View style={styles.headerRightBox}>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.dateBox}
        // onPress={() => showPicker(true)}
      >
        <View style={{width:'20%'}}></View>
        <View style={{flexDirection:'row',alignItems:'center',width:'60%',justifyContent:'center'}}>
          <Text style={styles.date}>
            05/2022
          </Text>
          <Text style ={{fontSize:14, color:'white', textAlign:'center'}}>
            (1/5-31/5)
          </Text>
        </View>
        <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
          <Image 
            source={require('../../assets/calendar.png')}
            style={styles.ImageIconStyle}
          />
        </View>
      </TouchableOpacity>
      {/* {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          minimumDate={new Date()}
          maximumDate={new Date(2025, 5)}
          locale="ko"
        />
      )} */}
      <View style={styles.totalBox}>
        <Text style={{textAlign:'center',
              color: 'black',
              fontSize: 18,
              marginVertical: '5%'}}>
          Chi tiêu tháng này
        </Text>
        <Text style ={styles.totalAmount}> 
          {total} VND
        </Text>
      </View>
      <View style={styles.layer1}>
          <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: '5%',
              marginHorizontal: '10%'}}>
            Danh sách chi tiêu
          </Text>
          <ScrollView style={styles.scrollView}>
            { Array.from(listExpense).map((obj: any) => (
              <TouchableOpacity style={styles.scrollBox}>
                <View style={styles.scrollItemNameBox}>
                  <Text style={styles.text}>{obj.category.name}</Text>
                </View>
                <View style={styles.scrollItemAmmountBox}>  
                  <Text style={styles.text}>{obj.amount} VND</Text>
                </View>
              </TouchableOpacity>
              )
            )}
          </ScrollView>
      </View>
    </View>
  );
}
export default ExpensePage;