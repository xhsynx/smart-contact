import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactsScreen from "./src/Screens/ContactsScreen";
import RecentsScreen from "./src/Screens/RecentsScreen";
import KeypadScreen from "./src/Screens/KeypadScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;
            if (route.name === "Keypad") {
              iconName = focused ? "md-keypad" : "md-keypad";
            } else if (route.name === "Recents") {
              iconName = focused ? "md-clock" : "md-clock";
            } else if (route.name === "Contacts") {
              iconName = focused ? "md-contacts" : "md-contacts";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: "#2e7d32",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: "black"
          }
        }}
      >
        <Tab.Screen name="Keypad" component={KeypadScreen} />
        <Tab.Screen name="Recents" component={RecentsScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
