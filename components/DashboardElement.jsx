import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function DashboardElement({ name, number, image, color, navigation }) {
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
        }
      }
      onPress={() => {
        console.log("Evo");
        if (name === "Total Greenhouses") {
          navigation.navigate("Greenhouses");
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
