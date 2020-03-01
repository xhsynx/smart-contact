import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactsScreen from "./src/Screens/ContactsScreen";
import AddUserScreen from "./src/Screens/AddUserScreen";
import AppInfoScreen from "./src/Screens/AppInfoScreen";
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
            if (route.name === "AddUser") {
              iconName = focused ? "md-person-add" : "md-person-add";
            } else if (route.name === "Contacts") {
              iconName = focused ? "md-contacts" : "md-contacts";
            } else if (route.name === "Info") {
              iconName = focused ? "md-information" : "md-information";
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
        <Tab.Screen name="AddUser" component={AddUserScreen} />
        <Tab.Screen name="Info" component={AppInfoScreen} />
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
