import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Alert, TouchableOpacity, Button } from 'react-native';
import appNavigator from '../appNavigator';
import IncomePage from '../showIncome/IncomePage';
import { NavigationScreenProp } from 'react-navigation';
import axios from 'axios';
import { useState } from 'react';
function ExpensePage(id: any) {
  const res = axios.get('http://localhost:9000/api/v1/expense');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeftBox}>
          <TouchableOpacity
          >
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
        onPress ={()=> Alert.alert('Calendar')}
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
      <View style={styles.textBox}>
        <Text style={{textAlign:'center',
              color: 'black',
              fontSize: 18,
              marginVertical: '5%'}}>
          Chi tiêu tháng này
        </Text>
        <Text style ={{textAlign: 'center', color: '#A16B56', fontSize: 30, fontWeight: 'bold', marginBottom: '5%'}}>
          15.000.000 VND
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
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemNameBox}>
                <Text style={styles.text}>Ăn uống</Text>
              </View>
              <View style={styles.scrollItemAmmountBox}>  
                <Text style={styles.text}>7.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemNameBox}>
                <Text style={styles.text}>Đi lại</Text>
              </View>
              <View style={styles.scrollItemAmmountBox}>
                <Text style={styles.text}>800.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemNameBox}>
                <Text style={styles.text}>Giao lưu</Text>
              </View>
              <View style={styles.scrollItemAmmountBox}>
                <Text style={styles.text}>1.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemNameBox}>
                <Text style={styles.text}>Giáo dục</Text>
              </View>
              <View style={styles.scrollItemAmmountBox}>
                <Text style={styles.text}>5.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemNameBox}>
                <Text style={styles.text}>Y tế</Text>
              </View>
              <View style={styles.scrollItemAmmountBox}>
                <Text style={styles.text}>200.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemNameBox}>
                <Text style={styles.text}>Quần áo</Text>
              </View>
              <View style={styles.scrollItemAmmountBox}>
                <Text style={styles.text}>1.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '10%',
  },
  header:{
    flexDirection: 'row',
    justifyContent:'center',
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#567D89',
    marginBottom:'5%'
  },
  headerLeftBox:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    width:'25%',
  },
  titleBox:{
    alignItems:'center',
    width: '50%',
  },
  title:{
    textAlign:"center",
    fontSize: 24,
    fontWeight:"bold",
  },
  headerRightBox:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width:'25%',
  },
  text:{
    textAlign:'center',
    color: '#709F9D',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date:{
    textAlign:'center',
    color:"#fff",
    fontSize: 24,
  },
  dateBox:{
    justifyContent: 'flex-end',
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: '5%',
    height: 50,
    width: '80%',
    backgroundColor: '#567D89',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height:5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  ImageIconStyle:{
    height: '60%',
    width: '50%',
    resizeMode:'stretch',
  },
  textBox:{
    justifyContent:'center',
    flexDirection:'column',
    marginBottom:30,
    height: 100,
    width: '80%',
    backgroundColor: '#E2D7A7',
    borderRadius: 15,
  },
  layer1: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#709F9D',
    width: '98%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: 'black',
    shadowOffset: {width: 0, height:-5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  scrollView:{
    flexDirection:'column',
  },
  scrollBox:{
    flexDirection: "row",
    alignItems:'center',
    justifyContent: 'space-around',
    marginHorizontal: '5%',
    marginBottom: '5%',
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height:5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  scrollItemNameBox:{
    flexDirection:'row',
    paddingLeft: '5%', 
    width:'40%', 
    alignItems:'flex-start'
  },
  scrollItemAmmountBox:{
    paddingRight: '5%', 
    width:'60%', 
    alignItems:'flex-end'
  },
})
export default ExpensePage;