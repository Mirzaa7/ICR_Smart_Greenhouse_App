import React, { useContext, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { GlobalContext } from "./StateProvider";

function GreenhouseAdd({ navigation }) {
  const [greenHouseName, setgreenHouseName] = useState("");
  const [plantName, setPlantName] = useState("");
  const [seedDate, setseedDate] = useState("");

  const {
    listOfGreenhousesState: { listOfGreenhouses },
    dispatch,
  } = useContext(GlobalContext);

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
          setgreenHouseName(newText);
        }}
        value={greenHouseName}
        name="greenHouseName"
      />

      <TextInput
        placeholder="Name of the plant"
        style={styles.input}
        onChangeText={(newText) => {
          setPlantName(newText);
        }}
        value={plantName}
        name="plantName"
      />
      <TextInput
        placeholder="Seed date"
        style={styles.input}
        onChangeText={(newText) => {
          setseedDate(newText);
        }}
        value={seedDate}
        name="seedDate"
      />

      <Pressable
        style={styles.login_button}
        onPress={() => {
          if (greenHouseName != "" && plantName != "" && seedDate != "") {
            dispatch({
              type: "ADD",
              payload: {
                greenHouseName: greenHouseName,
                plantName: plantName,
                seedDate: seedDate,
              },
            });

            setgreenHouseName("");
            setPlantName("");
            navigation.navigate("Greenhouses");
          } else {
            alert("Please enter the required parameters for your greenhouse!");
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
