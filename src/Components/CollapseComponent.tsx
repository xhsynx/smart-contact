import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import User from "../Models/User";
import { Ionicons } from "@expo/vector-icons";
import { remove, update } from "../Services/Firebase";
export default function CollapseComponent(props: any) {
  const navigation = useNavigation();
  const [user, setUser] = useState(props.user);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  if (modalVisible) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
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
            <Ionicons name={"md-create"} size={40} color={"#2e7d32"} />
            <Text
              style={{ color: "#2e7d32", fontSize: 16, fontWeight: "bold" }}
            >
              Edit Contact
            </Text>
          </View>
          <View style={styles.edit}>
            <Ionicons name={"md-person"} size={24} color={"#2e7d32"} />
            <TextInput
              autoFocus={false}
              placeholder={user.name}
              placeholderTextColor="grey"
              onChangeText={text => setName(text)}
              value={name}
              style={{
                color: "grey",
                width: screenWidth / 1.5,
                marginStart: 10
              }}
            ></TextInput>
          </View>
          <View style={styles.edit}>
            <Ionicons name={"md-call"} size={24} color={"#2e7d32"} />
            <TextInput
              autoFocus={false}
              placeholder={user.phone}
              placeholderTextColor="grey"
              onChangeText={text => setPhone(text)}
              value={phone}
              style={{
                color: "grey",
                width: screenWidth / 1.5,
                marginStart: 10
              }}
            ></TextInput>
          </View>
          <View style={styles.edit}>
            <Ionicons name={"md-mail"} size={24} color={"#2e7d32"} />
            <TextInput
              autoFocus={false}
              placeholder={user.email}
              placeholderTextColor="grey"
              onChangeText={text => setEmail(text)}
              value={email}
              style={{
                color: "grey",
                width: screenWidth / 1.5,
                marginStart: 10
              }}
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
                let updatedUser = new User();
                updatedUser.name = name;
                updatedUser.phone = phone;
                updatedUser.email = email;
                updatedUser.id = user.id;
                if (
                  updatedUser.name &&
                  updatedUser.email &&
                  updatedUser.phone
                ) {
                  update(updatedUser).then(() => {
                    setName("");
                    setEmail("");
                    setPhone("");
                    setModalVisible(!modalVisible);
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
                <Text style={{ color: "#2e7d32" }}>UPDATE</Text>
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
      </Modal>
    );
  }

  return (
    <View style={[styles.container]}>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white" }}>{user.phone}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Ionicons name={"md-call"} size={24} color={"#2e7d32"} />
        <Ionicons name={"md-information-circle"} size={24} color={"#2e7d32"} />
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Ionicons name={"md-create"} size={24} color={"#2e7d32"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            remove(user).then(() => {
              navigation.navigate("Contacts", { removedUser: user });
            });
          }}
        >
          <Ionicons name={"md-trash"} size={24} color={"#2e7d32"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "column",
    width: screenWidth,
    height: screenHeight / 10,
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderColor: "#2e7d32",
    paddingTop: 0,
    marginTop: 0,
    justifyContent: "space-around"
  },
  edit: {
    width: screenWidth / 1.5,
    height: screenHeight / 24,
    borderBottomWidth: 1,
    borderColor: "#2e7d32",
    backgroundColor: "black",
    flexDirection: "row",
    marginVertical: 10
  }
});
