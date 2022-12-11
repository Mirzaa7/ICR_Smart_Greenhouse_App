import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function GreenhouseItem({ name }) {
  return (
    <ScrollView contentContainerStyle={styles.greenHouseItemContainer}>
      <Text>This is {name}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  greenHouseItemContainer: {
    backgroundColor: "orange",
    margin: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
});

export default GreenhouseItem;
