import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  Text,
  Alert,
  TouchableOpacity
} from "react-native";
import { add } from "../Services/Firebase";
import { Ionicons } from "@expo/vector-icons";
import User from "../Models/User";

export default function AddUserScreen({ navigation }) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
      }}
    >
      <View
        style={{
          width: screenWidth / 1.5,
          height: screenHeight / 24,
          backgroundColor: "black",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 50
        }}
      >
        <Ionicons name={"md-person-add"} size={40} color={"#2e7d32"} />
        <Text style={{ color: "#2e7d32", fontSize: 16, fontWeight: "bold" }}>
          Add New Contact
        </Text>
      </View>
      <View style={styles.container}>
        <Ionicons name={"md-person"} size={24} color={"#2e7d32"} />
        <TextInput
          autoFocus={false}
          placeholder="Name"
          placeholderTextColor="grey"
          onChangeText={text => setName(text)}
          value={name}
          style={{ color: "grey", width: screenWidth / 1.5, marginStart: 10 }}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Ionicons name={"md-call"} size={24} color={"#2e7d32"} />
        <TextInput
          autoFocus={false}
          placeholder="Phone"
          placeholderTextColor="grey"
          onChangeText={text => setPhone(text)}
          value={phone}
          style={{ color: "grey", width: screenWidth / 1.5, marginStart: 10 }}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Ionicons name={"md-mail"} size={24} color={"#2e7d32"} />
        <TextInput
          autoFocus={false}
          placeholder="Email"
          placeholderTextColor="grey"
          onChangeText={text => setEmail(text)}
          value={email}
          style={{ color: "grey", width: screenWidth / 1.5, marginStart: 10 }}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: screenWidth / 1.5,
          height: screenHeight / 24,
          marginVertical: 30
        }}
      >
        <TouchableOpacity
          onPress={() => {
            let user = new User();
            user.name = name;
            user.phone = phone;
            user.email = email;

            if (user.name && user.email && user.phone) {
              add(user).then(usr => {
                setName("");
                setEmail("");
                setPhone("");
                navigation.navigate("Contacts", { addedUser: usr });
              });
            } else {
              Alert.alert("Warning!", "All fields are required!", [
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed")
                }
              ]);
            }
          }}
        >
          <View
            style={{
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "#2e7d32",
              width: 60,
              height: 60,
              borderRadius: 50,
              alignItems: "center"
            }}
          >
            <Ionicons name={"md-checkmark"} size={32} color={"#2e7d32"} />
            <Text style={{ color: "#2e7d32" }}>OK</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Contacts");
          }}
        >
          <View
            style={{
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "#2e7d32",
              width: 60,
              height: 60,
              borderRadius: 50,
              alignItems: "center"
            }}
          >
            <Ionicons name={"md-close"} size={32} color={"#2e7d32"} />
            <Text style={{ color: "#2e7d32" }}>CANCEL</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 1.5,
    height: screenHeight / 24,
    borderBottomWidth: 1,
    borderColor: "#2e7d32",
    backgroundColor: "black",
    flexDirection: "row",
    marginVertical: 10
  }
});
