import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Alert,
  Text,
  Button,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Video, AVPlaybackStatus } from "expo-av";

export default function ProfileScreen({ navigation, route }) {
  const [imageUri, setImageUri] = useState();
  const [personUri, setPersonUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  const requestPermissionPerson = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    requestPermissionPerson();
  }, []);

  const alertImage = () => {
    Alert.alert("Background Image", "Do you want pick background image", [
      { text: "Yes", onPress: selectImage },
      { text: "No", onPress: null },
    ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const alertImage2 = () => {
    Alert.alert("Personal Image", "Do you want pick personal image", [
      { text: "Yes", onPress: selectImage2 },
      { text: "No", onPress: null },
    ]);
  };

  const selectImage2 = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setPersonUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  const photo = [
    {
      Id: 1,
      ImageBackground: require("./Images/background.jpg"),
      ImagePerson: require("./Images/user.png"),
    },
  ];
  return (
    <FlatList
      data={photo}
      keyExtractor={(items) => items.Id}
      renderItem={({ item }) => (
        <SafeAreaView style={styles.container}>
          <View>
            <TouchableOpacity onPress={alertImage} style={styles.Image}>
              {!imageUri && (
                <Image style={styles.Image} source={item.ImageBackground} />
              )}
              {imageUri && (
                <Image style={styles.Image} source={{ uri: imageUri }} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Ionicons name="arrow-back" size={30} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={alertImage2} style={styles.person}>
              {!personUri && (
                <Image style={styles.person} source={item.ImagePerson} />
              )}
              {personUri && (
                <Image style={styles.person} source={{ uri: personUri }} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "#fff" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                margin: 10,
                color: "black",
              }}
            >
              {`Nahro Baize Omar`}
              {}
            </Text>
            <Text
              style={{
                fontWeight: "100",
                fontSize: 20,
                margin: 10,
                color: "black",
              }}
            >
              {`Place : `}
              {}
            </Text>
            <Text
              style={{
                fontWeight: "100",
                fontSize: 20,
                margin: 10,
                color: "black",
              }}
            >
              {`@ Nahro.12345@gmail.com`}
              {}
            </Text>
          </View>
        </SafeAreaView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 28 : 0,
    backgroundColor: "#fff",
    flex: 1,
  },
  Image: {
    width: 360,
    height: 220,
  },
  back: {
    position: "relative",
    bottom: 212,
    left: 12,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  person: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
  },
});
