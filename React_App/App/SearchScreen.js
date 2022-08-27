import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SearchScreen = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    alert("Id : " + item.id + " Title : " + item.title);
  };

  return (
    <SafeAreaView style={styles.container2}>
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("VideoScreen", { Card: route.params.Card })
          }
        >
          <Entypo
            style={{ marginLeft: 35 }}
            name="video"
            size={35}
            color="#fff"
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
        <TouchableOpacity>
          <Feather
            style={{ marginLeft: 35 }}
            name="search"
            size={35}
            color="#FFC045"
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

      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Search..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container2: {
    paddingTop: Platform.OS === "android" ? 28 : 0,
    flex: 1,
  },
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
});

export default SearchScreen;
