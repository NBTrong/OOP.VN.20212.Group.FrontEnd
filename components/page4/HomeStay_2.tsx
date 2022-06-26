import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View,  SafeAreaView,Image, Alert, TouchableOpacity, Button } from 'react-native';


function App(){
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.headingLeftBox}>
        <TouchableOpacity>
            <Text style={{fontSize:14,color:'grey'}}> {'<'} Quay lại </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Chi Tiết
          </Text>
        </View>
        <View style={styles.headingRightBox}>
          
        </View>
      </View>
      <TouchableOpacity 
        style={styles.dateBox}
        onPress ={()=> Alert.alert('Calendar')}
      >
        <View style={{width:'20%'}}></View>
        <View style={{flexDirection:'row',alignItems:'center',width:'60%',justifyContent:'center'}}>
          <Text style={styles.date}>
            15/05/2022
          </Text>
        </View>
        <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
          <Image 
            source={require('../../assets/calendar.png')}
            style={styles.ImageIconStyle}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.textBox_0}>
        <Text style ={{textAlign: 'left', color: '#000000', fontWeight: 'bold',fontSize: 14, marginBottom: '-1%'}}>
          Số Tiền
        </Text>
      </View>
      <View style={styles.textBox_1}>
        <Text style ={{textAlign: 'right', color: '#000000', fontSize: 17,fontWeight: 'bold', marginBottom: '1%', marginRight:'5%'}}>
          15.000.000.vnđ
        </Text>
      </View>
      <View style={styles.textBox_0}>
        <Text style ={{textAlign: 'left', color: '#000000',fontWeight: 'bold', fontSize: 14, marginBottom: '-1%'}}>
          Tên Ghi Nhớ
        </Text>
      </View>
      <View style={styles.textBox_1}>
        <Text style ={{textAlign: 'right', color: '#000000', fontSize: 17,fontWeight: 'bold', marginBottom: '1%', marginRight:'5%'}}>
          Lương
        </Text>
      </View>
      <View style={styles.textBox_0}>
        <Text style ={{textAlign: 'left', color: '#000000',fontWeight: 'bold', fontSize: 14, marginBottom: '-1%'}}>
          Nội Dung
        </Text>
      </View>
      <View style={styles.textBox_2}>
        <Text style ={{textAlign: 'left', color: '#000000', fontSize: 17,fontWeight: 'bold', marginBottom: '75%', marginRight:'5%',marginLeft:'7%'}}>
          Lương cứng 8 triệu thưởng overtime 10h 2 triệu
        </Text>
      </View>
     
      <TouchableOpacity 
        style={styles.dateBox2}
        onPress ={()=> Alert.alert('Next')}    
      >
        <View >
          <Text style ={{textAlign: 'center', color: '#8D6E63',fontSize: 24,fontWeight: 'bold', marginBottom: '1%', marginRight:'17%'}}>
            Chỉnh Sửa
          </Text>
        </View>
        
      </TouchableOpacity>
      
    </SafeAreaView>
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
  heading:{
    flexDirection: 'row',
    justifyContent:'center',
    width: '95%',
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
    fontSize: 17,
    fontWeight:"bold",
  },
  headingRightBox:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    width:'25%',
  },
  text:{
    textAlign:'center',
    color: 'white',
    fontSize: 20,
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
  dateBox2:{
    justifyContent: 'flex-end',
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: '10%',
    height: 50,
    width: '40%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    
  },
  ImageIconStyle:{
    height: '60%',
    width: '50%',
    resizeMode:'stretch',
  },
  textBox_1:{
    justifyContent:'center',
    flexDirection:'column',
    marginBottom:1,
    height: '7%',
    width: '80%',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    borderColor:"#FF5722",
  },
  textBox_0:{
    justifyContent:'flex-end',
    flexDirection:'column',
    marginBottom:5,
    height: '3%',
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderColor:"#FF5722",
  },
  textBox_2:{
    justifyContent:'center',
    flexDirection:'column',
    marginBottom:20,
    height: '50%',
    width: '80%',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    borderColor:"#FF5722",
  },
  textBox_3:{
    justifyContent:'center',
    flexDirection:'column',
    marginBottom:60,
    height: '7%',
    width: '40%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderColor:"#FF5722",
  },
  progressbar:{
    flexDirection: 'row',
    height: 5,
    marginHorizontal: '5%',
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 15,
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
    backgroundColor: '#709F9D',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height:5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
 
})
export default App;