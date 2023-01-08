import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalContext } from "./StateProvider";

function AlarmElement({ name, title, date, navigation }) {
  const {
    listOfGreenhousesState: { listOfGreenhouses },
    dispatch,
  } = useContext(GlobalContext);

  let greenHouseName,
    plantName,
    seedDate = "";

  return (
    <Pressable
      onPress={() => {
        const greenHouseIsFound = listOfGreenhouses.some((element) => {
          if (element.greenHouseName === name) {
            greenHouseName = element.greenHouseName;
            plantName = element.plantName;
            seedDate = element.seedDate;
            return true;
          }

          return false;
        });
        if (greenHouseIsFound) {
          navigation.navigate("GreenhouseItem", {
            greenHouseName: greenHouseName,
            plantName: plantName,
            seedDate: seedDate,
          });
        } else {
          alert(
            "The greenhouse " +
              name +
              " currently does not exist. Navigate to the Greenhouse section to create it!"
          );
        }
      }}
    >
      <View style={styles.alarmElement}>
        <Text>
          Name of the greenhouse:{" "}
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
        </Text>
        <Text>
          Alarm message: <Text style={{ fontWeight: "bold" }}>{title}</Text>
        </Text>
        <Text>
          Alarm date and time:{" "}
          <Text style={{ fontWeight: "bold" }}>{date}</Text>
        </Text>
        <Text style={{ fontStyle: "italic", marginTop: 5 }}>
          Press for more details
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  alarmElement: {
    backgroundColor: "orange",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});

export default AlarmElement;
