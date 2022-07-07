import React, {useCallback, useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Alert, TouchableOpacity, Button } from 'react-native';
import {getListIncomeApi} from '../../services/IncomeApi';
import styles from '../styles';
function IncomePage({ userKey }: { userKey: string }){
  const [listIncome, setListIncome] = useState<any>({});
  const getListIncome = useCallback(async () => {
    try {
      const response = await getListIncomeApi(userKey);
      setListIncome(response.data.data)
    } catch(error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    getListIncome();
  }, [])
  const total = (Array.from(listIncome).reduce((total : any, currentValue: any) => total=total+currentValue?.amount,0))
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeftBox}></View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Thu nhập
          </Text>
        </View>
        <View style={styles.headerRightBox}>
          <TouchableOpacity>
            <Text style={{fontSize:14,color:'grey'}}> Chi tiêu {'>'} </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.dateBox}
        onPress ={()=> Alert.alert('calendar')}
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
      <View style={styles.totalBox}>
        <Text style={{textAlign:'center',
              color: 'black',
              fontSize: 18,
              marginVertical: '5%'}}>
          Thu nhập tháng này
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
            Danh sách thu nhập
          </Text>
          <ScrollView style={styles.scrollView}>
          { Array.from(listIncome).map((obj: any) => (
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemNameBox}>
                <Text style={styles.text}>{obj.category.name}</Text>
              </View>
              <View style={styles.scrollItemAmmountBox}>
                <Text style={styles.text}>{obj.amount} VND</Text>
              </View>
            </TouchableOpacity>
            ))}
          </ScrollView>
      </View>
    </View>
  );
}
export default IncomePage;