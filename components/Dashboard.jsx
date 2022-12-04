import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardElement from "./DashboardElement";

import dashboardItems from "./DashboardItems";

function Dashboard({ navigation, route }) {
  const { username } = route.params;

  return (
    <View style={{ padding: 0 }}>
      <Text style={styles.welcomeTitle}>Welcome {username}!</Text>
      <ScrollView contentContainerStyle={styles.dashboard}>
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
      </ScrollView>
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
});

export default Dashboard;
