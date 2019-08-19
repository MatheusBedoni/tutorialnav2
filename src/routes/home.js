import React, { Component } from "react";
import { View, Text, TouchableHighlight, StatusBar, StyleSheet  } from "react-native";

//Icon
import Icon from "react-native-vector-icons/FontAwesome5";

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFFF00" />
        <Icon name="home" size={56} color="#FFFF00" solid />
        <Text style={styles.title}>Tutorial React Navigation+</Text>

        <TouchableHighlight
          underlayColor="#FFFF00"
          style={styles.buttons}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#FFFF00"
          style={styles.buttons}
          onPress={() => {
            this.props.navigation.navigate("cadastrar");
          }}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 17,
      color: "#FFFF00"
    },
    buttons: {
      width: 200,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFF00",
      borderRadius: 5,
      marginTop: 5
    },
    buttonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold"
    }
  });
  