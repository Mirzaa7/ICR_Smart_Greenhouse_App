import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalContext } from "./StateProvider";
import listOfAlarms from "./listOfAlarms";
import AlarmElement from "./AlarmElement";
import Navbar from "./Navbar";

function AlarmsList({ navigation }) {
  const {
    listOfGreenhousesState: { listOfGreenhouses },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <View style={styles.alarmsElement}>
      <ScrollView contentContainerStyle={styles.dashboard}>
        {listOfAlarms.map((item, itemIndex) => {
          return (
            <AlarmElement
              key={itemIndex}
              name={item.greenhouseID}
              title={item.alarmTitle}
              date={item.alarmDate}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    padding: "5%",
  },
  alarmsElement: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default AlarmsList;
