import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import User from "../Models/User";
import { Edit } from "./CollapseComponent";
export default function UserComponent(props: any) {
  const [userTouched, setUserTouched] = useState(false);
  let user = props.value;
  let avatarColor = props.avatarColor;
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setUserTouched(!userTouched);
        }}
      >
        <>
          <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
              {user.name[0]}
            </Text>
          </View>
          <Text style={styles.text}>{user.name}</Text>
        </>
        <View style={{ marginRight: 10 }}>
          {userTouched ? (
            <Ionicons
              name={"md-arrow-dropup-circle"}
              size={24}
              color={"#2e7d32"}
            />
          ) : (
            <Ionicons
              name={"md-arrow-dropdown-circle"}
              size={24}
              color={"#2e7d32"}
            />
          )}
        </View>
      </TouchableOpacity>
      {userTouched && <Edit value={user} />}
    </>
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginVertical: 1,
    borderWidth: 0.5,
    borderBottomWidth: 0,
    borderColor: "#2e7d32",
    justifyContent: "space-between"
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
