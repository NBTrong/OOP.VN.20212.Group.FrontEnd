import {StyleSheet} from 'react-native';
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
    totalBox:{
      justifyContent:'center',
      flexDirection:'column',
      marginBottom:30,
      width: '80%',
      backgroundColor: '#E2D7A7',
      borderRadius: 15,
    },
    totalAmount:{
      textAlign: 'center', 
      color: '#A16B56', 
      fontSize: 30, 
      fontWeight: 'bold',
      marginBottom: '5%'
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
export default styles