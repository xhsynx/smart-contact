import React, { useState } from "react";
import { StyleSheet, TextInput, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import User from "../Models/User";

export default function SearchComponent(props: any) {
  const [value, onChangeText] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={false}
        placeholder="Search"
        placeholderTextColor="grey"
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{ color: "grey" }}
      ></TextInput>
      <Ionicons name={"md-search"} size={24} color={"#2e7d32"} />
    </View>
  );
}

const searchFilter = (users: User[], searchTerm: string) => {
  users.filter(
    user => user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
};
const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2,
    height: screenHeight / 24,
    marginVertical: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#2e7d32",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  }
});
