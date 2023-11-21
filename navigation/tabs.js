//in this file we will create the tab navigator
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import MediaScreen from '../screens/MediaScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const Tab= createBottomTabNavigator();

const Tabs= ()=> {
    return(
        <Tab.Navigator
            //All this code underneath is for making the tabs
            //bar look nice and pretty
            screenOptions={({ route }) => ({
                headerShown:false,
                tabBarShowLabel: false, // To hide text labels
                tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
                //use shadow style here 
                //by destructuring style and providing shadow
                ...style.shadow
                },
            })}
        >
            <Tab.Screen name="Home" component= {HomeScreen} options={{
                //everything here is to customize the icon component
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../assets/icons/MC_Icon.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>
                            HOME
                        </Text>
                    </View>
                ),

            }}/>

            
            <Tab.Screen name="Map" component= {MapScreen}
            options={{
                //everything here is to customize the icon component
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../assets/icons/Map_icon.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>
                            MAP
                        </Text>
                    </View>
                ),

            }}/>
            <Tab.Screen name="Schedule" component= {ScheduleScreen}
            options={{
                //everything here is to customize the icon component
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../assets/icons/Schedule_Icon.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>
                            SCHEDULE 
                        </Text>
                    </View>
                ),

            }}/>
            <Tab.Screen name="Media" component= {MediaScreen}
            options={{
                //everything here is to customize the icon component
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../assets/icons/Gallery_icon.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>
                            MEDIA
                        </Text>
                    </View>
                ),

            }}/>
        </Tab.Navigator>
    );
}

//this is a styleSheet for the shadow around the tab bar
const style= StyleSheet.create({
    shadow:{
        //for ios
        shadowColor:'#7F5FDF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        //for android
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;