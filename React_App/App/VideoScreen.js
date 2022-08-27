import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Videos({ route, navigation }) {
  const video = React.useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          backgroundColor: "#113F67",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <AntDesign
            style={{ marginLeft: 20 }}
            name="home"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            style={{ marginLeft: 35 }}
            name="video"
            size={35}
            color="#FFC045"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PhotoScreen", { Card: route.params.Card })
          }
        >
          <MaterialIcons
            style={{ marginLeft: 35 }}
            name="insert-photo"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SearchScreen", { Card: route.params.Card })
          }
        >
          <Feather
            style={{ marginLeft: 35 }}
            name="search"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Ionicons
            style={{ marginLeft: 35 }}
            name="person-outline"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={route.params.Card}
        keyExtractor={(items) => items.Id}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 5,
                borderRightWidth: 20,
                borderLeftWidth: 20,
                backgroundColor: "#222831",
              }}
            >
              {item.Video2 && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("ProfileScreen")}
                  style={styles.touchImage}
                >
                  {item.Video2 && (
                    <Image style={styles.image} source={item.Image} />
                  )}
                </TouchableOpacity>
              )}
              {item.Video2 && <Text style={styles.name}>{item.Name}</Text>}
            </View>
            <View
              style={{
                alignItems: "center",
                borderRightWidth: 20,
                borderLeftWidth: 20,
                backgroundColor: "#222831",
              }}
            >
              {item.Video2 && <Text style={styles.text}>{item.Text}</Text>}
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#222831",
                borderRightWidth: 20,
                borderLeftWidth: 20,
              }}
            >
              {item.Video2 && (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("BigSubject", { Video2: item.Video2 })
                  }
                >
                  {item.Video2 && (
                    <Video
                      ref={video}
                      style={styles.video2}
                      source={item.Video2}
                      shouldPlay
                      isMuted
                      isLooping
                      resizeMode="contain"
                    />
                  )}
                </TouchableOpacity>
              )}
              {item.Video2 && (
                <View style={{ flexDirection: "row", padding: 12 }}>
                  <TouchableOpacity style={{ marginRight: 50 }}>
                    {item.Video2 && (
                      <Fontisto name="like" size={25} color="#EAFFD0" />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginRight: 50 }}>
                    {item.Video2 && (
                      <Fontisto name="dislike" size={25} color="#EAFFD0" />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginRight: 50 }}>
                    {item.Video2 && (
                      <FontAwesome name="comments" size={25} color="#EAFFD0" />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity>
                    {item.Video2 && (
                      <Ionicons name="share-social" size={25} color="#EAFFD0" />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 28 : 0,
  },
  touchImage: {
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 40,
    marginTop: 5,
  },
  image: {
    marginTop: 10,
    marginLeft: 10,
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginLeft: 16,
    color: "#FFFFFF",
  },
  text: {
    marginBottom: 7,
    marginLeft: 70,
    marginRight: 7,
    fontSize: 13.7,
    color: "#FFFFFF",
  },
  video2: {
    width: 300,
    height: 300,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
  },
});
