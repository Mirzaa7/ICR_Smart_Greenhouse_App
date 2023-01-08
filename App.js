import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GreenHouseList from "./components/GreenHouseList";

import GreenhouseAdd from "./components/GreenhouseAdd";
import GreenHouse from "./components/GreenHouse";

import AlarmsList from "./components/AlarmsList";
import GlobalProvider from "./components/StateProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
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

          <Stack.Screen
            name="GreenhouseItem"
            component={GreenHouse}
            options={({ route }) => ({
              title: route.params.greenHouseName,
              headerTitleAlign: "center",
            })}
          />

          <Stack.Screen
            name="Alarms"
            component={AlarmsList}
            /*options={{
            title: "List of all greenhouses",
            headerTitleAlign: "center",
          }}*/

            options={({ navigation }) => ({
              title: "List of all active alarms",
              headerTitleAlign: "center",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
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
