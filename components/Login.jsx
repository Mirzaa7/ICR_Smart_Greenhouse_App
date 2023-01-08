import React, { useContext, useState } from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { GlobalContext } from "./StateProvider";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(GlobalContext);

  return (
    <View style={styles.login_container}>
      <View style={styles.welcomeElement}>
        <Text style={styles.welcomeTitle}>Welcome back!</Text>
        <Image
          style={styles.welcomeLogo}
          source={require("../assets/React_icon.png")}
        />
      </View>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={(newText) => {
          setUsername(newText);
        }}
        value={username}
        name="Username"
      />
      <TextInput
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(newText) => {
          setPassword(newText);
        }}
        value={password}
        name="Password"
      />

      <Pressable
        style={styles.login_button}
        onPress={() => {
          setUsername("");
          setPassword("");
          if (username != "" && password != "") {
            dispatch({
              type: "ADD_USER",
              payload: username,
            });
            navigation.navigate("Dashboard");
          } else {
            alert("Please enter your credentials!");
          }
        }}
      >
        <Text style={{ color: "white" }}>Log in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  login_container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //position: "relative",
  },

  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "70%",
    borderRadius: 5,
  },
  login_button: {
    backgroundColor: "darkred",
    padding: 10,
    marginTop: 10,
    width: "20%",
    alignItems: "center",
    borderRadius: 5,
  },
  welcomeLogo: {
    height: 70,
    width: 70,
  },
  welcomeTitle: {
    //position: "absolute",
    //top: 70,
    fontSize: 30,
    fontWeight: "bold",
  },
  welcomeElement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "30%",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
});

export default Login;
