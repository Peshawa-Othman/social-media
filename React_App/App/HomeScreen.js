import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation, Card, route }) {
  const video = React.useRef(null);
  Card = [
    {
      Id: 1,
      Image: require("../App/Images/boy1.jpg"),
      Name: "Nahro baiz",
      Text: "I am so happy in my live i wisue every one like me.",
      Subject: require("../App/Images/backgroundBoy1.jpg"),
      Video2: require("../App/Videos/video3.mp4"),
    },
    {
      Id: 2,
      Image: require("../App/Images/gril1.jpg"),
      Name: "Mzhda Othman",
      Text: "One day i will be a photo grapher becouse i like that so much.",
      Subject: require("../App/Images/backgroundGril1.jpg"),
      Video2: undefined,
    },
    {
      Id: 3,
      Image: require("../App/Images/boy2.jpg"),
      Name: "Harem saysaiaqy",
      Text: "Never stop doing what you like becouse you cant be happy with out that.",
      Subject: require("../App/Images/backgroundBoy2.jpg"),
      Video2: undefined,
    },
    {
      Id: 4,
      Image: require("../App/Images/gril2.jpg"),
      Name: "Chilar omar",
      Text: "The new year so good for me becouse i will go to shoping.",
      Subject: require("../App/Images/backgroundBoy3.jpg"),
      Video2: undefined,
    },
    {
      Id: 5,
      Image: require("../App/Images/boy3.jpg"),
      Name: "Nvar soran",
      Text: "This year, I just tried hard to achieve my goals.",
      Subject: require("../App/Images/backgroundBoy4.jpg"),
      Video2: undefined,
    },
    {
      Id: 6,
      Image: require("../App/Images/boy1.jpg"),
      Name: "Nahro baiz",
      Text: "I am so happy in my live i wisue every one like me.",
      Subject: require("../App/Images/backgroundBoy1.jpg"),
      Video2: require("../App/Videos/video1.mp4"),
    },
    {
      Id: 7,
      Image: require("../App/Images/boy1.jpg"),
      Name: "Nahro baiz",
      Text: "I am so happy in my live i wisue every one like me.",
      Subject: require("../App/Images/backgroundBoy1.jpg"),
      Video2: require("../App/Videos/video2.mp4"),
    },
  ];

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
        <TouchableOpacity>
          <AntDesign
            style={{ marginLeft: 20 }}
            name="home"
            size={35}
            color="#FFC045"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("VideoScreen", { Card: Card })}
        >
          <Entypo
            style={{ marginLeft: 35 }}
            name="video"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PhotoScreen", { Card: Card })}
        >
          <MaterialIcons
            style={{ marginLeft: 35 }}
            name="insert-photo"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchScreen", { Card: Card })}
        >
          <Feather
            style={{ marginLeft: 35 }}
            name="search"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProfileScreen", { Image: Card.Image })
          }
        >
          <Ionicons
            style={{ marginLeft: 35 }}
            name="person-outline"
            size={35}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={Card}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("ProfileScreen")}
                style={styles.touchImage}
              >
                <Image style={styles.image} source={item.Image} />
              </TouchableOpacity>
              <Text style={styles.name}>{item.Name}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                borderRightWidth: 20,
                borderLeftWidth: 20,
                backgroundColor: "#222831",
              }}
            >
              <Text style={styles.text}>{item.Text}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#222831",
                borderRightWidth: 20,
                borderLeftWidth: 20,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("BigSubject", {
                    Subject: item.Subject,
                    Video2: item.Video2,
                  })
                }
              >
                {item.Video2 ? (
                  <Video
                    ref={video}
                    style={styles.video2}
                    source={item.Video2}
                    shouldPlay
                    isLooping
                    resizeMode="contain"
                  />
                ) : (
                  <Image style={styles.subject} source={item.Subject} />
                )}
              </TouchableOpacity>
              <View style={{ flexDirection: "row", padding: 12 }}>
                <TouchableOpacity style={{ marginRight: 50 }}>
                  <Fontisto name="like" size={25} color="#EAFFD0" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 50 }}>
                  <Fontisto name="dislike" size={25} color="#EAFFD0" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 50 }}>
                  <FontAwesome name="comments" size={25} color="#EAFFD0" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="share-social" size={25} color="#EAFFD0" />
                </TouchableOpacity>
              </View>
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
  subject: {
    width: 300,
    height: 300,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
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
