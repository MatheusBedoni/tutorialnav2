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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: ""
    };

    
  }



  render() {
    return (
      <View style={styles.container}>
        <Icon name='home' size={56} color='#FFFF00'/>
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
          onPress={() => {
            this.props.navigation.navigate("Drawer");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#CCC"
          style={styles.buttons}
        >
          <Text style={styles.brncad}>Não possui cadastro? clique aqui!</Text>
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
    backgroundColor: "#fff"
  },
  buttons: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#CCC",
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
    borderColor: "#CCC",
    borderWidth:1,
    fontSize: 16,
    borderRadius: 5,
    width: 200,
    height: 35,
    padding: 5,
    marginTop: 5
  },
  brncad:{
    borderBottomWidth:1

  }
})