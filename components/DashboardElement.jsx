import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalContext } from "./StateProvider";

import listOfAlarms from "./listOfAlarms";

function DashboardElement({ name, number, image, color, navigation }) {
  const {
    listOfGreenhousesState: { listOfGreenhouses },
    dispatch,
  } = useContext(GlobalContext);

  if (name === "Total Greenhouses") {
    number = listOfGreenhouses.length;
  }
  if (name === "Total Alarms") {
    number = listOfAlarms.length;
  }

  /*useEffect(() => {
    dispatch({
      type: "ADD",
      payload: {
        greenHouseName: "greenHouseName1",
        plantName: "plantName1",
        seedDate: "seedDate1",
      },
    });
  }, []);

  console.log("ovo je state: " + listOfGreenhouses[2].plantName);
  */

  return (
    <Pressable
      style={
        /*styles.dashboardElement*/ {
          backgroundColor: color,
          width: "33%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 10,
          paddingBottom: 0,
          margin: 5,
          borderRadius: 10,
        }
      }
      onPress={() => {
        if (name === "Total Greenhouses") {
          navigation.navigate("Greenhouses");
        } else if (name === "Total Alarms") {
          navigation.navigate("Alarms");
        }
      }}
    >
      <Image
        style={styles.welcomeLogo}
        source={require("../assets/React_icon.png")}
      />
      <View style={styles.dashboardElementText}>
        <Text style={{ textAlign: "center", color: "white" }}>{name}</Text>
        <Text style={{ color: "white" }}>{number}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  welcomeLogo: {
    height: 40,
    width: 40,
    marginTop: 10,
  },
  dashboardElement: {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    paddingBottom: 0,
    margin: 5,
  },
  dashboardElementText: {
    height: 90,
    padding: 10,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DashboardElement;
