import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import GreenhouseItem from "./GreenhouseItem";

function GreenHouseList({ navigation }) {
  const [listOfGreenhouses, setListOfGreenhouses] = useState([]);

  return (
    <ScrollView contentContainerStyle={styles.greenHouseListElement}>
      <View style={styles.greenHouseList}>
        {listOfGreenhouses.map((item) => {
          return <GreenhouseItem name={item.name} />;
        })}
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("AddGreenhouse", {
            listOfGreenhouses: listOfGreenhouses,
            setListOfGreenhouses: setListOfGreenhouses,
          });
        }}
        style={styles.addButton}
      >
        <Text style={styles.addButtonIcon}>+</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  greenHouseListElement: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  greenHouseList: {
    padding: 10,
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 25,
  },
  addButton: {
    backgroundColor: "darkred",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  addButtonIcon: {
    color: "white",
  },
});

export default GreenHouseList;
