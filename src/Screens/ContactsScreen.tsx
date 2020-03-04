import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text } from "react-native";
import UserComponent from "../Components/UserComponent";
import HeaderComponent from "../Components/HeaderComponent";
import { select } from "../Services/Firebase";
import { useIsFocused } from "@react-navigation/native";

export default function ContactsScreen() {
  const [users, setUsers] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    setUsers(select());
  }, [users.length]);

  return (
    <>
      <HeaderComponent value={"Phone"} />
      <SafeAreaView style={styles.container}>
        {isFocused ? (
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <UserComponent value={item} avatarColor={getRandomColor()} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>Loading...</Text>
        )}
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

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
