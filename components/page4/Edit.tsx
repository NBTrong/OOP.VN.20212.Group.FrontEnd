import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View,  SafeAreaView,Image, Alert, TouchableOpacity, TextInput } from 'react-native';

function Edit(){
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState('');
  
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
      <View style={{height:'60%', justifyContent:'flex-start',flexDirection:'column',width:'80%'}}>
          <Text style={{fontWeight:'bold'}}>
            Số tiền
          </Text>
            <TextInput
              style={{ height: '10%', borderColor: '#BF360C', borderWidth: 2, borderRadius:10, marginBottom:10 }}
              onChangeText={Number => onChangeNumber(Number)}
              value={number}
              placeholder=".vnd"
              keyboardType="numeric"
            />

          <Text style={{fontWeight:'bold'}}>
            Tên ghi nhớ
          </Text>
            <TextInput
              style={{ height: '10%', borderColor: '#BF360C', borderWidth: 2, borderRadius:10, marginBottom:20 }}
              onChangeText={text => onChangeText(text)}
              value={text}
              placeholder="vd:tien luong..."
              
            />
          <Text style={{fontWeight:'bold'}}>
            Nội dung
          </Text>
            <TextInput
              style={{ height: '50%', borderColor: '#BF360C', borderWidth: 2, borderRadius:10 }}
              onChangeText={text => onChangeText(text)}
              value={text}
              placeholder="vd:tra luong muon 1 ngay"
              numberOfLines={100}
              multiline={true}            
            />
        </View>

        <View style={{height:'10%',width:'45%',alignItems:'center'}}>
        <TouchableOpacity style={{width: '85%', 
            backgroundColor: 'white',            
            justifyContent:'center',
            alignItems:'center',
            borderColor: '#BF360C',
            borderRadius:10,
            marginTop:'15%',
            flexDirection:'column'}}>
                <Text style={{ color:'#BF360C', fontSize:30, }}> Chỉnh sửa</Text>
            </TouchableOpacity>

        </View>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom:'10%'
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
    justifyContent:'flex-start',
    flexDirection:'column',
    marginBottom:5,
    height: '10%',
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    
  },
  textBox_2:{
    justifyContent:'center',
    flexDirection:'column',
    marginBottom:20,
    height: '50%',
    width: '80%',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    borderBottomColor: '#567D89',
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
    borderBottomColor: '#567D89',
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
export default Edit;