import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GreenHouseList from "./components/GreenHouseList";

import GreenhouseAdd from "./components/GreenhouseAdd";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Log into your account",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          /*options={{
            title: "Your dashboard",
            headerTitleAlign: "center",
            headerRight: () => <Text>Test</Text>,
          }}*/

          options={({ route }) => ({
            title: "Your dashboard",
            headerTitleAlign: "center",
            headerRight: () => <Text>Test</Text>,
          })}
        />

        <Stack.Screen
          name="Greenhouses"
          component={GreenHouseList}
          /*options={{
            title: "List of all greenhouses",
            headerTitleAlign: "center",
          }}*/

          options={({ navigation }) => ({
            title: "List of all greenhouses",
            headerTitleAlign: "center",
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate("AddGreenhouse");
                }}
              >
                <Text>Add</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="AddGreenhouse"
          component={GreenhouseAdd}
          options={{
            title: "Create a greenhouse",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
