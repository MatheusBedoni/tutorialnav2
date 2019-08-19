import React, { Component } from "react";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import home from "./src/routes/home";
import Login from "./src/routes/Login";
import cadastrar from "./src/routes/cadastrar";
import Drawer from "./src/routes/Drawer";
const navigator = createSwitchNavigator({
  home: {
    screen: home,
    navigationOptions: {
      header: null
    }
  },
    Login:{
      screen: Login,
      navigationOptions: {
        headerTitle: "Login"
      }
    },
    cadastrar: {
      screen: cadastrar,
      navigationOptions: {
        headerTitle: "Cadastrar"
      }
    },
    Drawer:{
      screen: Drawer
    }
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: "#FFFF00"
      },
      headerTintColor: "#FFFF00"
    }
  });

export default createAppContainer(navigator);