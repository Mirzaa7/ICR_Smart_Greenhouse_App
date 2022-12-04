import React from "react";
import { Text } from "react-native";

function GreenhouseAdd() {
  return <Text>Test</Text>;
  //Ovdje se kupe podaci o greenhouse
  //Kreira se objekat Greenhouse
  //Mora se kao props u ovaj element proslijediti set metoda za state niz
  //To se moze ako se makne add button iz headera u body(onda ide klasicno)
  //Moze se i preko use effecta pristupiti add elementu u headeru pa pozvati preko propsa set metodu(mozda?)
  //Zatim se taj objekat preko navigation prenesu kroz props u greenHouseList
  //Zatim se u greenHouseList dodaje u state niz taj objekat
}

export default GreenhouseAdd;
