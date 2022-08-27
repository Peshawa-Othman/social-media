import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";

export default function Video({ Card }) {
  const video = React.useRef(null);

  const [state, setState] = useState();
  Card = [
    {
      Id: 1,
      Video2: require("./App/Videos/video3.mp4"),
    },
  ];
  const windowHeight = Dimensions.get("window").height;
  function ifHapen(p) {
    return (p = false);
  }
  const v = ifHapen() ? true : false;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Card}
        keyExtractor={(items) => items.Id}
        renderItem={({ item }) => (
          <View>
            <View
              style={{ width: "100%", height: 900, backgroundColor: "black" }}
            />
            <View style={{ alignItems: "center", backgroundColor: "#222831" }}>
              <Video
                ref={video}
                style={styles.video2}
                source={item.Video2}
                shouldPlay={v}
                isLooping
                resizeMode="contain"
              />
            </View>
            <View
              style={{ width: "100%", height: 900, backgroundColor: "black" }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 28 : 0,
    flex: 1,
  },
  video2: {
    width: 400,
    height: 400,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
  },
});
