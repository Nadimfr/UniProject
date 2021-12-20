import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
} from "@react-navigation/drawer";


import useFonts from './assets/Fonts/Hook';
import { styles } from './AppStyle';

import AboutStack from './navigations/AboutStack';
import BottomTabStack from './navigations/BottomTabStack'

const DrawerStack = createDrawerNavigator();

const CustomDrawer = (props) =>{
	return(
		<DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
				<View style={styles.LogoImgContainer}>
					<Image source={require('./assets/Logo-Drawer.png')} style={styles.LogoImg} resizeMode='cover'/>
				</View>
				<View style={styles.LoggedinContainer}>
					<Text style={styles.LoggedinText}>Logged in as user@yopmail.com</Text>
				</View>
				<TouchableOpacity onPress={()=>props.navigation.navigate("Home")} style={styles.DrawerItemContainer}>
					<AntDesign name="home" size={24} color="black" />
					<Text style={styles.DrawerItemText}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>props.navigation.navigate("About")} style={styles.DrawerItemContainer}>
					<AntDesign name="questioncircle" size={24} color="black" />
					<Text style={styles.DrawerItemText}>About</Text>
				</TouchableOpacity>
		</DrawerContentScrollView>
	);
};

export default function App(){

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };
	
  if(!IsReady){
    return <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />}
  else
		return (
			<NavigationContainer>
				<DrawerStack.Navigator
				drawerContent={(props) => (
					<CustomDrawer
							{...props}
						/>
					)}
					>
					<DrawerStack.Screen name="Home" component={BottomTabStack} />
					{/* <DrawerStack.Screen name="Home" component={HomeStack} /> */}
					<DrawerStack.Screen name="About" component={AboutStack} />
				</DrawerStack.Navigator>
			</NavigationContainer>
		);
	};
