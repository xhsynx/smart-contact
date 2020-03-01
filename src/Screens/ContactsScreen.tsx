import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import UserComponent from "../Components/UserComponent";

import HeaderComponent from "../Components/HeaderComponent";
import { select } from "../Services/Firebase";
import User from "../Models/User";

export default function ContactsScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setUsers(select());
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <HeaderComponent value={"Phone"} />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <UserComponent value={item} avatarColor={getRandomColor()} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
}

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
