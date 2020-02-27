import React from "react";
import { StyleSheet, FlatList, SafeAreaView, View } from "react-native";
import UserComponent from "../Components/UserComponent";
import User from "../Models/User";
import { users } from "../Models/mock";

export default function ContactsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserComponent value={item} avatarColor={getRandomColor()} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
