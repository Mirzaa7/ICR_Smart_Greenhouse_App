import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function GreenhouseAdd({ route, navigation }) {
  const { listOfGreenhouses, setListOfGreenhouses } = route.params;

  const [name, setName] = useState(""); // bolje je napraviti objekat kao state
  let greenHouseElement = {
    name: "",
  };
  let newGreenhouseList = listOfGreenhouses;
  return (
    <View style={styles.login_container}>
      <View style={styles.welcomeElement}>
        <Image
          style={styles.welcomeLogo}
          source={require("../assets/React_icon.png")}
        />
      </View>
      <TextInput
        placeholder="Name of your greenhouse"
        style={styles.input}
        onChangeText={(newText) => {
          setName(newText);
        }}
        value={name}
        name="name"
      />

      <Pressable
        style={styles.login_button}
        onPress={() => {
          if (name != "") {
            setListOfGreenhouses([
              ...listOfGreenhouses,
              {
                name: name,
              },
            ]);
            setName("");
            navigation.navigate("Greenhouses");
          } else {
            alert("Please enter the name for your greenhouse!");
          }
        }}
      >
        <Text style={{ color: "white" }}>Create</Text>
      </Pressable>
    </View>
  );
  //Ovdje se kupe podaci o greenhouse
  //Kreira se objekat Greenhouse
  //Mora se kao props u ovaj element proslijediti set metoda za state niz
  //To se moze ako se makne add button iz headera u body(onda ide klasicno)
  //Moze se i preko use effecta pristupiti add elementu u headeru pa pozvati preko propsa set metodu(mozda?)
  //Zatim se taj objekat preko navigation prenesu kroz props u greenHouseList
  //Zatim se u greenHouseList dodaje u state niz taj objekat
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

export default GreenhouseAdd;
