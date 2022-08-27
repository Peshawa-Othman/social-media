import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const Name = "Peshawa";
  const Password = "561324";

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [errorPasswordAndName, setErrorPasswordAndName] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.backgroundImage}>
          <Image source={require("./Icons/icons8-send-64.png")} />
        </View>
        <Text style={styles.text}>K-Net</Text>
      </View>
      <View style={{ marginTop: 100 }}>
        <View style={styles.viewName}>
          <Ionicons
            style={{ marginTop: 7, marginRight: 5 }}
            name="ios-person-outline"
            size={24}
            color="black"
          />
          <TextInput
            onChangeText={setName}
            placeholder="User Name:"
            style={styles.textPasswordAndTextName}
          />
        </View>
        <View style={styles.viewPassword}>
          <MaterialIcons
            style={{ marginTop: 7, marginRight: 5 }}
            name="lock-outline"
            size={24}
            color="black"
          />
          <TextInput
            onChangeText={setPassword}
            keyboardType="number-pad"
            secureTextEntry
            placeholder="Enter Password:"
            style={styles.textPasswordAndTextName}
          />
        </View>
        <Text style={{ alignSelf: "center", color: "red", marginBottom: 20 }}>
          {errorPasswordAndName}
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => {
            Name === name && Password === password
              ? navigation.navigate("HomeScreen")
              : setErrorPasswordAndName("Password or User Name is wrong.");
          }}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <Text style={styles.createAccount}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  view: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 60,
  },
  backgroundImage: {
    backgroundColor: "#D0F5EA",
    borderRadius: 5,
  },
  text: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  viewName: {
    flexDirection: "row",
    backgroundColor: "#ABFFD2",
    alignSelf: "center",
    width: 300,
    height: 45,
    borderRadius: 5,
    padding: 2,
    marginBottom: 35,
  },
  viewPassword: {
    flexDirection: "row",
    backgroundColor: "#ABFFD2",
    alignSelf: "center",
    width: 300,
    height: 45,
    borderRadius: 5,
    padding: 2,
  },
  textPasswordAndTextName: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 268,
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 10,
  },
  login: {
    backgroundColor: "#04C45E",
    width: 200,
    height: 40,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  createAccount: {
    backgroundColor: "#538C6E",
    width: 200,
    height: 40,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
