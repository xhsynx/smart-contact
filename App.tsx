import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactsScreen from "./src/Screens/ContactsScreen";
import AddScreen from "./src/Screens/AddScreen";
import SearchScreen from "./src/Screens/SearchScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Contacts"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;
            if (route.name === "Search") {
              iconName = focused ? "md-search" : "md-search";
            } else if (route.name === "Add") {
              iconName = focused ? "md-person-add" : "md-person-add";
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
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
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
