import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import GreenhouseItem from "./GreenhouseItem";
import Navbar from "./Navbar";
import { GlobalContext, useStateValue } from "./StateProvider";

function GreenHouseList({ navigation }) {
  const {
    listOfGreenhousesState: { listOfGreenhouses },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <View style={styles.greenHouseListContainer}>
      <ScrollView contentContainerStyle={styles.greenHouseListElement}>
        <View style={styles.greenHouseList}>
          {listOfGreenhouses.length != 0 ? (
            listOfGreenhouses.map((item, itemIndex) => {
              return (
                <GreenhouseItem
                  key={itemIndex}
                  greenHouseName={item.greenHouseName}
                  plantName={item.plantName}
                  seedDate={item.seedDate}
                  navigation={navigation}
                />
              );
            })
          ) : (
            <Text style={{ fontWeight: "bold" }}>
              Your greenhouse list is empty, click the + button to create one!
            </Text>
          )}
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("AddGreenhouse");
          }}
          style={styles.addButton}
        >
          <Text style={styles.addButtonIcon}>+</Text>
        </Pressable>
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  greenHouseListContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  greenHouseListElement: {
    display: "flex",
    flexDirection: "column",
    //justifyContent: "flex-start",
    alignItems: "center",
    // height: "100%",
    paddingTop: "2%",
  },
  greenHouseList: {
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  addButton: {
    backgroundColor: "darkred",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: "5%",
  },
  addButtonIcon: {
    color: "white",
  },
});

export default GreenHouseList;
