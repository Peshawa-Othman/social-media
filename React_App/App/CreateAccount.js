import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CreateAccount({ navigation, data }) {
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [jender, setJender] = useState([]);
  const [place, setPlace] = useState([]);
  const [password, setPassword] = useState([]);
  const [password2, setPassword2] = useState([]);
  const [errors, setErrors] = useState();

  data = [
    {
      Key: 1,
      Email: email,
      Name: name,
      Age: age,
      Jender: jender,
      Place: place,
      Password: password,
      Password2: password2,
    },
  ];
  const RadioButton = ({ onPress, selected, children }) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Male", selected: false },
    { id: 2, value: false, name: "Female", selected: false },
  ]);
  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Entypo style={styles.email} name="email" size={24} />
        <TextInput
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Enter your Email:"
          style={styles.textEmail}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Ionicons style={styles.person} name="person" size={24} />
        <TextInput
          onChangeText={setName}
          placeholder="Enter Your Name:"
          style={styles.textName}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome style={styles.age} name="calendar-times-o" size={24} />
        <TextInput
          onChangeText={setAge}
          maxLength={2}
          keyboardType="phone-pad"
          placeholder="Age:"
          style={styles.textAge}
        />
        <View style={styles.app}>
          {isLiked.map((item) => (
            <RadioButton
              onPress={() => onRadioBtnClick(item)}
              selected={item.selected}
              key={item.id}
            >
              {item.name}
            </RadioButton>
          ))}
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons style={styles.place} name="place" size={27} />
        <TextInput
          onChangeText={setPlace}
          placeholder="Place of living:"
          style={styles.textPlace}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          style={styles.password}
          name="form-textbox-password"
          size={27}
        />
        <TextInput
          onChangeText={setPassword}
          secureTextEntry
          keyboardType="numeric"
          placeholder="Create Password:"
          style={styles.textPassword}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          style={styles.password}
          name="onepassword"
          size={27}
          color="black"
        />
        <TextInput
          onChangeText={setPassword2}
          secureTextEntry
          keyboardType="numeric"
          placeholder="Type a password again:"
          style={styles.textPassword}
        />
      </View>
      <Text style={{ alignSelf: "center", color: "red" }}>{errors}</Text>
      <View>
        <FlatList
          data={data}
          keyExtractor={(items) => items.Key.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  email.length > 10 &&
                  name.length > 8 &&
                  age.length >= 2 &&
                  place.length > 4 &&
                  password.length > 2 &&
                  password2.length > 2 &&
                  password === password2
                    ? navigation.navigate("ProfileScreen", {
                        Email: item.Email,
                        Name: item.Name,
                        Age: item.Age,
                        Place: item.Place,
                        Password: item.Password,
                        Password2: item.Password2,
                      })
                    : setErrors("Please fill in the blanks")
                }
              >
                <Text style={styles.butttonCreate}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={styles.butttonCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  email: {
    color: "blue",
    marginTop: 60,
    position: "absolute",
    left: 12,
  },
  person: {
    color: "blue",
    marginTop: 40,
    position: "absolute",
    left: 12,
  },
  age: {
    color: "blue",
    marginTop: 35,
    position: "absolute",
    left: 12,
  },
  textEmail: {
    borderRadius: 10,
    backgroundColor: "#ABFFD2",
    width: 270,
    height: 45,
    marginLeft: 40,
    fontWeight: "bold",
    marginTop: 50,
    paddingLeft: 5,
  },
  textName: {
    borderRadius: 10,
    backgroundColor: "#ABFFD2",
    width: 270,
    height: 45,
    marginLeft: 40,
    fontWeight: "bold",
    marginTop: 30,
    paddingLeft: 5,
  },
  textAge: {
    borderRadius: 5,
    backgroundColor: "#ABFFD2",
    width: 45,
    height: 35,
    marginLeft: 40,
    fontWeight: "bold",
    marginTop: 30,
    paddingLeft: 5,
  },
  app: {
    flexDirection: "row",
    marginTop: 30,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
  },
  radioButton: {
    height: 30,
    width: 30,
    backgroundColor: "#F8F8F8",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#98CFB6",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 12,
  },
  place: {
    color: "blue",
    marginTop: 40,
    position: "absolute",
    left: 12,
  },
  textPlace: {
    borderRadius: 10,
    backgroundColor: "#ABFFD2",
    width: 200,
    height: 45,
    marginLeft: 40,
    fontWeight: "bold",
    marginTop: 30,
    paddingLeft: 5,
  },
  textPassword: {
    borderRadius: 10,
    backgroundColor: "#ABFFD2",
    width: 270,
    height: 45,
    marginLeft: 40,
    fontWeight: "bold",
    marginTop: 30,
    paddingLeft: 5,
  },
  password: {
    color: "blue",
    marginTop: 40,
    position: "absolute",
    left: 12,
  },
  butttonCreate: {
    marginTop: 50,
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#04C45E",
    height: 45,
    width: 130,
    borderRadius: 5,
    paddingTop: 11,
    paddingLeft: 6,
  },
  butttonCancel: {
    marginTop: 50,
    marginLeft: 40,
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#04C45E",
    height: 45,
    width: 130,
    borderRadius: 5,
    paddingTop: 11,
    paddingLeft: 40,
  },
});
