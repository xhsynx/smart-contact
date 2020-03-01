import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchComponent from "./SearchComponent";
import AddUserComponent from "./AddUserComponent";

export default function HeaderComponent(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#2e7d32" }}>
        {props.value}
      </Text>
      <Ionicons name={"md-call"} size={30} color={"#2e7d32"} />
      <SearchComponent value={props.search} />
      {modalVisible && <AddUserComponent value={modalVisible} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
