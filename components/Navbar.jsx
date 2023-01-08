import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Navbar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.navbarElement}
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      >
        <Text style={{ color: "white" }}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.navbarElement}
        onPress={() => {
          navigation.navigate("Greenhouses");
        }}
      >
        <Text style={{ color: "white" }}>Greenhouse</Text>
      </Pressable>
      <Pressable
        style={styles.navbarElement}
        onPress={() => {
          navigation.navigate("Alarms");
        }}
      >
        <Text style={{ color: "white" }}>Alarms</Text>
      </Pressable>
      <Pressable style={styles.navbarElement}>
        <Text style={{ color: "white" }}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "lightgrey",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "11%",
    padding: 0,
  },
  navbarElement: {
    color: "white",
    height: "60%",
    width: "22%",
    backgroundColor: "darkred",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
});

export default Navbar;
