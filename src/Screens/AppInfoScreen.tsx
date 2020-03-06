import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity
} from "react-native";

export default function AppInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>😊</Text>
      <Text style={{ fontSize: 50 }}>👇🏻</Text>

      <TouchableOpacity
        style={{
          alignItems: "center"
        }}
        onPress={() => {
          Linking.openURL("https://github.com/xhsynx/smart-contact");
        }}
      >
        <Text style={{ color: "#2e7d32" }}>GitHub Link</Text>
        <Text style={{ color: "#2e7d32", fontSize: 10 }}>version 1.0</Text>
        <Text style={{ color: "#2e7d32", fontSize: 10 }}>
          contact info: huseyin.akcicek@outlook.com
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
