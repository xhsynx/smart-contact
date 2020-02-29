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
              iconName = focused ? "md-information" : "md-information";
            } else if (route.name === "Contacts") {
              iconName = focused ? "md-contacts" : "md-contacts";
            }
            // You can return any component that you like here!

            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#2e7d32",
                  borderRadius: 50,
                  width: 30,
                  height: 30,
                  alignItems: "center"
                }}
              >
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
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
