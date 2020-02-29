import React, { useState } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Text,
  Modal,
  View,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddUserComponent(props: any) {
  const [modalVisible, setModalVisible] = useState(props.value);

  return (
    <View style={{ marginTop: 22, backgroundColor: "white" }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
