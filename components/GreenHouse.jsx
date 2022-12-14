import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function GreenHouse({ route }) {
  const { plantName, seedDate, greenHouseName } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.dashboard}>
      <View style={styles.greenHouseElement1}>
        <Text>{plantName}</Text>
        <Text>Seed Sown Date: {seedDate}</Text>
      </View>
      <View style={styles.greenHouseElement2}>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Total Energy Usage (kW)</Text>
          <Text>1500</Text>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Total Water Usage (l)</Text>
          <Text>3500</Text>
        </View>
      </View>
      <View style={styles.greenHouseElement3}>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
            marginTop: 10,
          }}
        >
          <Text>Temperature (C)</Text>
          <Text>25</Text>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
            marginTop: 10,
          }}
        >
          <Text>Moisture (%)</Text>
          <Text>13</Text>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
            marginTop: 10,
          }}
        >
          <Text>Humidity (%)</Text>
          <Text>62</Text>
        </View>
      </View>
      <View style={styles.greenHouseElement3}>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
            marginTop: 10,
          }}
        >
          <Text>Fans</Text>
          <Text>5</Text>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
            marginTop: 10,
          }}
        >
          <Text>Lights</Text>
          <Text>30</Text>
        </View>
        <View
          style={{
            backgroundColor: "orange",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "33%",
            marginTop: 10,
          }}
        >
          <Text>Pumps</Text>
          <Text>2</Text>
        </View>
      </View>

      <View style={styles.greenHouseElement4}>
        <Text style={{ padding: 10 }}>Alerts for {greenHouseName}</Text>
        <View style={styles.alertsElement}>
          <Text>Mouisture Level Low</Text>
          <Text>20/6/2022 14:30h</Text>
        </View>
        <View style={styles.alertsElement}>
          <Text>Temperature critical</Text>
          <Text>10/8/2022 13:30h</Text>
        </View>
        <View style={styles.alertsElement}>
          <Text>Soil Nutrient Level Low</Text>
          <Text>25/7/2022 10:30h</Text>
        </View>
      </View>
    </ScrollView>
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
    height: "100%",
  },

  greenHouseElement1: {
    backgroundColor: "orange",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    paddingBottom: 0,
    margin: 5,
    height: "10%",
    justifyContent: "space-around",
  },
  greenHouseElement2: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  greenHouseElement3: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  greenHouseElement4: {
    backgroundColor: "lightgrey",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    marginTop: 40,
  },
  alertsElement: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "aliceblue",
    width: "90%",
    justifyContent: "space-around",
    height: "10%",
    paddingTop: 5,
    marginBottom: 10,
  },
});

export default GreenHouse;
