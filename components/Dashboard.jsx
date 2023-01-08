import React, { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardElement from "./DashboardElement";

import dashboardItems from "./DashboardItems";
import Navbar from "./Navbar";
import GlobalProvider, { GlobalContext } from "./StateProvider";

function Dashboard({ navigation, route }) {
  //const { username } = route.params;

  const {
    listOfGreenhousesState: { listOfGreenhouses, username },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Text style={styles.welcomeTitle}>Welcome {username}!</Text>
      <View style={styles.dashboard}>
        {dashboardItems.map((item, itemIndex) => {
          return (
            <DashboardElement
              key={itemIndex}
              name={item.name}
              number={item.number}
              image={item.image}
              color={item.color}
              navigation={navigation}
            />
          );
        })}
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 80,
  },
  welcomeTitle: {
    padding: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  navbar: {
    backgroundColor: "orange",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "10%",
  },
});

export default Dashboard;
