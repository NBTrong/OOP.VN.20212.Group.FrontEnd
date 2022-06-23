import { Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'

export default function HomePage() {
  return (
    <View style = {styles.container}>
      <View style = {styles.top}> 
        <Text style = {styles.topText}>Trang chủ</Text>
      </View>
      <Text style = {styles.day}>Thứ 6 ngày 12 tháng 6 năm 2022</Text>
      <View style = {styles.tietKiem}>
        <Text style = {styles.tietKiem1}>Tiết Kiệm</Text>
        <Text style = {styles.tietKiem2}>5.000.000 VNĐ</Text>
        <Text style = {styles.tietKiem3}>Khả dụng</Text>
      </View>
      <View style = {styles.nganSach}>
        <Text style = {styles.nganSach1}>Ngân sách cho tháng 6</Text>
        <Text style = {styles.nganSach2}>còn lại</Text>
        <Text style = {styles.nganSach3}>5.000.000 VNĐ</Text>
      </View>
      <View style = {styles.keHoach}>
        <View style = {styles.keHoachDescription}>
          <Text style = {styles.keHoach1}>Kế hoạch chi tiêu</Text>
          <Text style = {styles.keHoach2}>Tiết kiệm điện, nước, giảm chi phí cho việc ... xem thêm</Text>
        </View>
        <View style = {styles.iconKeHoach}>
          <Icon name="shopping-bag" color="#a85c32" size={40}/>
        </View>
      </View>
      <Text style = {{
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 40,
      }}>Thu chi trong tháng</Text>
      <View style = {{
        flex: 1,
        flexDirection: 'row',
      }}>
        <View style = {styles.Thu}>
          <View style = {styles.ThuIconPlace}>
            <Icon name="smile-o" color="white" size={25}/>
          </View>
          <Text style={{
            marginHorizontal: 15,
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#A16B56',
          }}>15.000.000 VNĐ</Text>
          <Text style={{
            marginHorizontal: 15,
            marginVertical: 10,
            color: '#A16B56',
          }}>Tổng thu nhập</Text>
        </View>
        <View style = {styles.Chi}>
          <View style = {styles.ChiIconPlace}>
            <Icon name="frown-o" color="white" size={25}/>
          </View>
          <Text style={{
            marginHorizontal: 15,
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>10.000.000 VNĐ</Text>
          <Text style={{
            marginHorizontal: 15,
            marginVertical: 10,
            color: '#FFFFFF',
          }}>Tổng chi tiêu</Text>
        </View>
      </View>
      <Text style = {{
        marginTop: 80,
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center', 
        position: 'relative'
      }}>+5.000.000 VNĐ</Text>

      <TouchableOpacity style = {styles.btnAdd} onPress={() => Alert.alert('Simple Button pressed')}>
              <Icon1 name="pluscircleo" color="white" size={50}/>
      </TouchableOpacity>

      <View style = {styles.bottom}>
          <Image style ={{
            width: '100%',
            height: '100%',
          }} source={require('../../assets/doc.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  top: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      paddingBottom: 10,
      borderBottomWidth: 1,
      marginHorizontal: 20,
      borderColor: '#A16B56',
  },
  topText: {
      fontSize: 16,
      fontWeight: 'bold',
  },
  day: {
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 14,
      fontWeight: 'bold',
  },

  tietKiem: {
      marginHorizontal: 20,
      backgroundColor: '#567D89',
      borderRadius: 20,
      paddingVertical: 15,
      paddingHorizontal: 20,
  },
  tietKiem1: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
  },
  tietKiem2: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
  },
  tietKiem3: {
      marginTop: 10,
      color: '#c0c4c4',
  },
  nganSach: {
      marginHorizontal: 20,
      marginTop: 10,
      backgroundColor: '#A16B56',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
  },
  nganSach1: {
    fontSize: 16,
    color: 'white',
  },
  nganSach2: {
    color: '#c0c4c4',
  },
  nganSach3: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
  },

  keHoach: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  keHoachDescription: {
    width: 200,
  },
  keHoach1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  keHoach2: {
    color: '#818181',
    marginTop: 10,
  },
  iconKeHoach: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  keHoach3: {
    color: 'black',
    textAlign: 'center',
  },
  Thu: {
    flex: 1,
    width: 100,
    height: 150,
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#E2D7A7',
  },
  ThuIconPlace: {
    marginTop: 15,
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#A16B56',
    justifyContent: 'center',
    alignItems:'center',
  },

  Chi: {
    flex: 1,
    width: 100,
    height: 150,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: '#709F9D',
  },
  ChiIconPlace: {
    marginTop: 15,
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#567D89',
    justifyContent: 'center',
    alignItems:'center',
  },
  btnAdd: {
    width: 50,
    height: 50,
    marginTop: 25,
    backgroundColor: '#FFC727',
    alignSelf:'center',
    borderRadius: 50,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
