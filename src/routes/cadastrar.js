import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  StatusBar
} from "react-native";

//Icon
import Icon from "react-native-vector-icons/FontAwesome5";

export default class cadastrar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
      name: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

        <Icon name="sign-in-alt" size={56} color="#FFF" solid />

        <TextInput
          style={styles.input}
          placeholder="Nome e Sobrenome"
          value={this.state.name}
        />

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={this.state.user}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          value={this.state.pass}
        />

        <TouchableHighlight
          underlayColor="#CCC"
          style={styles.buttons}
          onPress={() => {}}
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
      alignItems: "center",
      backgroundColor: "#FFFF00"
    },
    buttons: {
      width: 200,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFF",
      borderRadius: 5,
      marginTop: 5
    },
    buttonText: {
      color: "#0066CC",
      fontSize: 14,
      fontWeight: "bold"
    },
    input: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      fontSize: 16,
      borderRadius: 5,
      width: 200,
      height: 35,
      padding: 5,
      marginTop: 5
    }
  });