import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { version } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import PostScreen from '../screen/PostScreen';
import SettingScreen from '../screen/SettingScreen';
import FindScreen from '../screen/FindScreen';
import HomePage from '../HomePage';




const CustomTabBarButton = ({ children, onPress }: { children: any, onPress: any })  => (
    <TouchableOpacity
        style= {{
            top: -35,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress = {onPress}>
        <View style = {{
            width: 120,
            alignItems: 'center',
        }}>
            <Image source={require('../../assets/plus.png')} ></Image>
            {children}
        </View>
    </TouchableOpacity>
)
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
    <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 60,
                position: 'absolute',
                
            },
            tabBarBackground: () => (
                <Image style={{width: '100%', height: '100%'}} source={require('../../assets/doc.png')}/>
            )
        }}>
        <Tab.Screen 
            name="Home" 
            component={HomePage} 
            options={{
                tabBarIcon: () => (<Icon name= "home" color="#A16B56" size={30}/>)
            }}/>
        <Tab.Screen 
            name="Chat" 
            component={ChatScreen} 
            options={{
                //tabBarIcon: ({focused}) => (<Icon name={focused ? "heart" : "heart-o"} color="black" size={25}/>)
                tabBarIcon: () => (<Icon name="heart" color="#A16B56" size={25}/>)
            }}/>
        <Tab.Screen 
            name="Find" 
            component={FindScreen} 
            options={{
                //tabBarIcon: () => (<Icon1 name= "pluscircleo" color="white" size={50}/>),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}/>
        <Tab.Screen 
            name="Post" 
            component={PostScreen} 
            options={{
                tabBarIcon: () => (<Icon name= "shopping-bag" color="#A16B56" size={25}/>)
            }}/>
        <Tab.Screen 
            name="Settings" 
            component={SettingScreen} 
            options={{
                tabBarIcon: () => (<Icon name= "user" color="#A16B56" size={25}/>)
            }}/>
     </Tab.Navigator>
    );
}

export default Tabs;