import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View
} from "react-native";
import User from "../Models/User";
export default function UserComponent(props: any) {
  let user = props.value;
  let avatarColor = props.avatarColor;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          {user.name[0]}
        </Text>
      </View>
      <Text style={styles.text}>{user.name}</Text>
    </TouchableOpacity>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    width: screenWidth,
    height: screenHeight / 14,
    borderRadius: 75,
    marginVertical: 1,
    borderWidth: 0.5,
    borderColor: "#2e7d32"
  },
  text: {
    color: "white"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 75,
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});
