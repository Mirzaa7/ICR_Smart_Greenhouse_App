import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import listOfAlarms from "./listOfAlarms";
import GreenhouseSensorInformation from "./GreenhouseSensorInformation";
import Navbar from "./Navbar";

function GreenHouse({ route, navigation }) {
  const { plantName, seedDate, greenHouseName } = route.params;

  return (
    <View style={styles.greenHouseContainer}>
      <View style={styles.dashboard}>
        <View style={styles.greenHouseElement1}>
          <Text>
            Name of the plant:{" "}
            <Text style={{ fontWeight: "bold" }}>{plantName}</Text>
          </Text>
          <Text>
            Seed Sown Date:{" "}
            <Text style={{ fontWeight: "bold" }}>{seedDate}</Text>
          </Text>
        </View>
        <View style={styles.greenHouseElement2}>
          {GreenhouseSensorInformation.filter(
            (filterItem) => filterItem.greenhouseID === greenHouseName
          ).map((item, itemIndex) => {
            return item.usage.map((usageItem, usageItemIndex) => {
              return (
                <View
                  key={usageItemIndex}
                  style={{
                    backgroundColor: "orange",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    padding: 5,
                  }}
                >
                  <Text>{usageItem.title}</Text>
                  <Text style={{ fontWeight: "bold" }}>{usageItem.value}</Text>
                </View>
              );
            });
          })}
        </View>
        <View style={styles.greenHouseElement3}>
          {GreenhouseSensorInformation.filter(
            (filterItem) => filterItem.greenhouseID === greenHouseName
          ).map((item, itemIndex) => {
            return item.sensors.map((sensorsItem, sensorsItemIndex) => {
              return (
                <View
                  key={sensorsItemIndex}
                  style={{
                    backgroundColor: "orange",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    width: "33%",
                  }}
                >
                  <Text>{sensorsItem.title}</Text>
                  <Text style={{ fontWeight: "bold" }}>
                    {sensorsItem.value}
                  </Text>
                </View>
              );
            });
          })}
        </View>
        <View style={styles.greenHouseElement3}>
          {GreenhouseSensorInformation.filter(
            (filterItem) => filterItem.greenhouseID === greenHouseName
          ).map((item, itemIndex) => {
            return item.devices.map((devicesItem, devicesItemIndex) => {
              return (
                <View
                  key={devicesItemIndex}
                  style={{
                    backgroundColor: "orange",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    width: "33%",
                  }}
                >
                  <Text>{devicesItem.title}</Text>
                  <Text style={{ fontWeight: "bold" }}>
                    {devicesItem.value}
                  </Text>
                </View>
              );
            });
          })}
        </View>

        <View style={styles.greenHouseElement4}>
          <Text style={{ padding: 10, fontWeight: "bold" }}>
            Alerts for {greenHouseName}
          </Text>

          {listOfAlarms
            .filter((item) => item.greenhouseID === greenHouseName)
            .map((item, itemIndex) => {
              return (
                <View key={itemIndex} style={styles.alertsElement}>
                  <Text>{item.alarmTitle}</Text>
                  <Text>{item.alarmDate}</Text>
                </View>
              );
            })}
        </View>
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
    paddingBottom: 0,
    height: "80%",
  },
  alarmListElement: {
    //height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 10,
  },
  greenHouseContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  greenHouseElement1: {
    backgroundColor: "orange",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 0,
    margin: 5,
    height: "10%",
    justifyContent: "center",
    borderRadius: 10,
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
    borderRadius: 10,
  },
  greenHouseElement4: {
    backgroundColor: "lightgrey",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    marginTop: 40,
    borderRadius: 10,
    paddingBottom: 15,
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
    borderRadius: 10,
  },
});

export default GreenHouse;
