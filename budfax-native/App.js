import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { 
  createSwitchNavigator, 
  createStackNavigator ,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import { Icon } from 'native-base'

// Auth stack screen imports
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
import WelcomeScreen from './src/components/screens/WelcomeScreen'
import SignUpScreen from './src/components/screens/SignUpScreen'
import SignInScreen from './src/components/screens/SignInScreen'
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen'

// App stack screen imports
import HomeScreen from './src/components/screens/HomeScreen'
import SettingsScreen from './src/components/screens/SettingsScreen'
import ProfileScreen from './src/components/screens/ProfileScreen'

// Bottom Auth tabs
  const AppTabNavigator = createBottomTabNavigator({
  Profile: {
    screen: ProfileScreen
  },
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    // Set the header icon
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24}/>
          </View>
        </TouchableOpacity>
      )
    })
  }
})

// App stack for the drawer
const AppDrawerNavigator = createDrawerNavigator({
  Tabs: AppStackNavigator, // defined above
  Home: HomeScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen
})

// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})

export default createSwitchNavigator({
  Authloading: AuthLoadingScreen,
  Auth: AuthStackNavigator, // the Auth stack
  App: AppDrawerNavigator, // the App stack
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
