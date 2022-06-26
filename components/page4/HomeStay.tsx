import *as React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert, TouchableOpacity, Button, AppRegistry, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.headingLeftBox}>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: 'grey' }}> Sửa  </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Yêu Thích
          </Text>
        </View>
        <View style={styles.headingRightBox}>
          <TouchableOpacity>
            <Text style={{ fontSize: 19, color: 'grey' }}> +  </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.layer2}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity style={styles.scrollBox}>
            <View style={styles.scrollItemLeftBox}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.title1}>
              <Text style={styles.text}>Máy Giặt</Text>
            </View>
            <View style={styles.scrollItemRightBox}>
              <Text style={styles.text}>7.000.000 VNĐ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollBox}>
            <View style={styles.scrollItemLeftBox}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.title1}>
              <Text style={styles.text}>Máy Giặt</Text>
            </View>
            <View style={styles.scrollItemRightBox}>
              <Text style={styles.text}>2.000.000 VNĐ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollBox}>
            <View style={styles.scrollItemLeftBox}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.title1}>
              <Text style={styles.text}>Máy Giặt</Text>
            </View>
            <View style={styles.scrollItemRightBox}>
              <Text style={styles.text}>1.000.000 VNĐ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollBox}>
            <View style={styles.scrollItemLeftBox}>
              <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.title1}>
              <Text style={styles.text}>Máy Giặt</Text>
            </View>
            <View style={styles.scrollItemRightBox}>
              <Text style={styles.text}>1.000.000 VNĐ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollBox}>
            <View style={styles.scrollItemLeftBox}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.title1}>
              <Text style={styles.text}>Máy Giặt</Text>
            </View>
            <View style={styles.scrollItemRightBox}>
              <Text style={styles.text}>200.000 VNĐ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollBox}>
            <View style={styles.scrollItemLeftBox}>
              <Text style={styles.text}>6</Text>
            </View>
            <View style={styles.title1}>
              <Text style={styles.text}>Máy Giặt</Text>
            </View>
            <View style={styles.scrollItemRightBox}>
              <Text style={styles.text}>1.000.000 VNĐ</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.layer}>
        <TouchableOpacity style={styles.scrollBox}>
          <Text style={styles.textInLayer1}>Khả Dụng</Text>
          <Text style={styles.textInLayer2}>1.000.000 VNĐ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    position: "relative"
  },
  text: {
    fontWeight: 'bold'
  },
  title: {
    textAlign: 'right',
    marginLeft: -10,
    fontSize: 18,
    fontWeight: "bold"
  },
  title1: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    width: 100,
    
  },
  fixToText: {
    flexDirection: 'column',
    justifyContentent: 'space-between',
  },
  heading: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 380,
    borderBottomWidth: 2,
    borderBottomColor: '#567D89',
    marginBottom: 20
  },
  scrollView: {
    flexDirection: 'column',
  },
  scrollBox: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 5

  },
  scrollItemLeftBox: {
    backgroundColor: '#c4c4c4',
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  scrollItemRightBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120
  },
  layer2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: '2%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  layer: {
    backgroundColor: '#567d89',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom:100,
    width: '100%'
  },
  textInLayer1: {
    paddingLeft: 10,
    color: 'white'
  },
  textInLayer2: {
    paddingRight: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  headingLeftBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '25%',
  },
  titleBox: {
    alignItems: 'center',
    width: '50%',
  },
  headingRightBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '25%',
  },
}
)
export default App;