import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchComponent from "./SearchComponent";
export default function HeaderComponent(props: any) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#2e7d32" }}>
        {props.value}
      </Text>
      <Ionicons name={"md-call"} size={30} color={"#2e7d32"} />
      <SearchComponent value={props.search} />
    </View>
  );
}

const screenHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
