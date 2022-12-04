import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

function GreenHouseList() {
  const [listOfGreenhouses, setListOfGreenhouses] = useState([]); // ovo ide jedan nivo van, tj u dashboard ili provjeriti
  //da li se svaki put resetuje state kada se vrati na ovaj ekran sa kreiranja greenhouse
  return (
    <ScrollView contentContainerStyle={{}}>
      <Text>Greenhouse list</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default GreenHouseList;
