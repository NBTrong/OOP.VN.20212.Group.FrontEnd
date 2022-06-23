import *as React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert, TouchableOpacity, Button,AppRegistry,TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function App(){
  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.heading}>
        <View style={styles.headingLeftBox}>
        <TouchableOpacity>
            <Text style={{fontSize:18,color:'grey'}}> Sửa  </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Yêu thích
          </Text>
        </View>
        <View style={styles.headingRightBox}>
        <TouchableOpacity>
            <Text style={{fontSize:24,color:'grey'}}> + </Text>
        </TouchableOpacity>
        </View>
      </View>
         
<View style={styles.layer2}>
          <Text style={{
              color: '#709F9D',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: '5%',
              marginHorizontal: '10%'}}>
            Danh sách chi tiêu
          </Text>
          <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemLeftBox}>
                <Text style={styles.text}>Ăn uống</Text>
              </View>
              <View style={styles.scrollItemRightBox}>  
                <Text style={styles.text}>7.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemLeftBox}>
                <Text style={styles.text}>Đi lại</Text>
              </View>
              <View style={styles.scrollItemRightBox}>
                <Text style={styles.text}>800.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemLeftBox}>
                <Text style={styles.text}>Giao lưu</Text>
              </View>
              <View style={styles.scrollItemRightBox}>
                <Text style={styles.text}>1.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemLeftBox}>
                <Text style={styles.text}>Giáo dục</Text>
              </View>
              <View style={styles.scrollItemRightBox}>
                <Text style={styles.text}>5.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemLeftBox}>
                <Text style={styles.text}>Y tế</Text>
              </View>
              <View style={styles.scrollItemRightBox}>
                <Text style={styles.text}>200.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollBox}>
              <View style={styles.scrollItemLeftBox}>
                <Text style={styles.text}>Quần áo</Text>
              </View>
              <View style={styles.scrollItemRightBox}>
                <Text style={styles.text}>1.000.000 VNĐ</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

              
            
              
              
</SafeAreaView>
);
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title1: {
    textAlign: 'left',
    marginRight:10,
    width: 40,
  },
  title2: {
    textAlign: 'right',
    marginRight:10,
    fontSize:18,
    width: 110,
  },
  text:{
    textAlign:'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'column',
    justifyContentent: 'space-between',
  },
  heading:{
    flexDirection: 'row',
    justifyContent:'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#567D89',
    marginBottom:'5%'
  },
  headingLeftBox:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
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
  headingRightBox:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    width:'25%',
  },
  scrollView:{
    flexDirection:'column',
  },
  scrollBox:{
    flexDirection: "row",
    alignItems:'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    height: 40,
    width: '10%',
    backgroundColor: '#C62828',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height:5},
  },
  scrollItemLeftBox:{
    paddingLeft: '5%', 
    width:'40%', 
    alignItems:'flex-start'
  },
  scrollItemRightBox:{
    paddingRight: '5%', 
    width:'60%', 
    alignItems:'flex-end'
  },
  layer2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-between',
    backgroundColor: '#fff',
    marginHorizontal: '2%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: 'black',
    shadowOffset: {width: 0, height:-5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
}
)
export default App;


