import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";

export default function BigSubject({ route, navigation }) {
  const video = React.useRef(null);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      {route.params.Video2 ? (
        <Video
          ref={video}
          style={styles.subject}
          source={route.params.Video2}
          shouldPlay
          useNativeControls
          resizeMode="contain"
        />
      ) : (
        <Image style={styles.subject} source={route.params.Subject} />
      )}
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack("HomeScreen")}
      >
        <Ionicons name="arrow-back" size={30} color="blue" />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", position: "absolute", bottom: 90 }}>
        <TouchableOpacity style={{ marginRight: 60, marginLeft: 20 }}>
          <Fontisto name="like" size={25} color="#EAFFD0" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 90 }}>
          <Fontisto name="dislike" size={25} color="#EAFFD0" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 50 }}>
          <FontAwesome name="comments" size={25} color="#EAFFD0" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Ionicons name="share-social" size={25} color="#EAFFD0" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subject: {
    margin: 100,
    width: "100%",
    height: "65%",
    alignSelf: "center",
  },
  back: {
    position: "relative",
    bottom: 630,
    left: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
