import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Dimensions
} from "react-native";
import UserComponent from "../Components/UserComponent";
import { select } from "../Services/Firebase";
import { Ionicons } from "@expo/vector-icons";
export default function ContactsScreen({ navigation, route }) {
  const [search, setSearch] = useState("");
  const [contacts, setcontacts] = useState([]);

  if (route.params?.addedContact) {
    setcontacts([...contacts, route.params.addedContact]);
    route.params.addedContact = null;
  }
  if (route.params?.removedContact) {
    setcontacts([]);
    route.params.removedContact = null;
  }
  if (route.params?.editedContact) {
    setcontacts([]);
    route.params.editedContact = null;
  }
  useEffect(() => {
    select().then(u => {
      setcontacts(u);
    });
  }, [contacts.length]);

  return (
    <>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#2e7d32" }}>
          Phone
        </Text>
        <Ionicons name={"md-call"} size={30} color={"#2e7d32"} />
        <View style={styles.search}>
          <TextInput
            autoFocus={false}
            placeholder="Search"
            placeholderTextColor="grey"
            onChangeText={text => {
              setSearch(text);
            }}
            value={search}
            style={{
              color: "grey",
              width: screenWidth / 2,
              height: screenHeight / 20
            }}
          ></TextInput>
          <Ionicons name={"md-search"} size={24} color={"#2e7d32"} />
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        {contacts.length > 0 && (
          <FlatList
            data={contacts?.filter(
              u => u?.name?.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )}
            renderItem={({ item }) => (
              <UserComponent user={item} avatarColor={getRandomColor()} />
            )}
            keyExtractor={item => item.id.toString()}
          />
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
const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 0.5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  search: {
    width: screenWidth / 1.5,
    height: screenHeight / 20,
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
