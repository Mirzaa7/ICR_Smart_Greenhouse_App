import React, { useContext } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalContext } from "./StateProvider";

function GreenhouseItem({ greenHouseName, plantName, seedDate, navigation }) {
  const {
    listOfGreenhousesState: { listOfGreenhouses },
    dispatch,
  } = useContext(GlobalContext);
  // da bi se centrirao tekst u elementu gdje ima i X, moze se napraviti da je sirina prvog elementa 100% a drugog 10%
  return (
    // i da se stavi da je z indeks drugog veci, i onda se samo centrira tekst u prvom elementu
    <View style={styles.greenHouseItemContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate("GreenhouseItem", {
            greenHouseName: greenHouseName,
            plantName: plantName,
            seedDate: seedDate,
          });
        }}
      >
        <Text
          style={{
            paddingLeft: 120,
            fontWeight: "bold",
          }}
        >
          {greenHouseName}
        </Text>
        <Text
          style={{
            paddingLeft: 100,
            fontStyle: "italic",
          }}
        >
          Press for more details
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch({
            type: "REMOVE",
            payload: {
              greenHouseName: greenHouseName,
            },
          });
        }}
      >
        <Text style={{ paddingRight: 10, fontSize: 15, fontWeight: "bold" }}>
          X
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  greenHouseItemContainer: {
    backgroundColor: "orange",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    marginBottom: "5%",
    height: 60,
  },
});

export default GreenhouseItem;
