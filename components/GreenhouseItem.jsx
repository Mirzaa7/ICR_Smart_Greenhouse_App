import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

function GreenhouseItem({ greenHouseName, plantName, seedDate, navigation }) {
  return (
    <ScrollView>
      <Pressable
        style={styles.greenHouseItemContainer}
        onPress={() => {
          navigation.navigate("GreenhouseItem", {
            greenHouseName: greenHouseName,
            plantName: plantName,
            seedDate: seedDate,
          });
        }}
      >
        <Text style={{ width: "90%", textAlign: "center" }}>
          {greenHouseName}
        </Text>
        <Text style={{ width: "20%", fontSize: 17 }}>X</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  greenHouseItemContainer: {
    backgroundColor: "orange",
    margin: 10,
    height: 60,
    alignItems: "center",
    width: 160,
    display: "flex",
    flexDirection: "row",
    paddingRight: 5,
  },
});

export default GreenhouseItem;
