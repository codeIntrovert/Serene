import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Response from "../components/response";
import Message from "../components/message";
import tw from "twrnc";

export default function Chat() {
  const [inputText, setInputText] = useState("");
  const [listData, setListData] = useState([]);
  const SearchInput = () => {
    setListData((prevList): any => [...prevList, inputText]);
    setInputText("");
  };
  return (
    <>
      <View style={tw`h-25 w-full bg-[#006de5]`}>
        <Text style={tw`font-bold text-2xl mt-10 text-white text-center`}>
          Jerry AI
        </Text>
      </View>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* Header */}

        {/* Content */}
        <FlatList
          style={{ paddingHorizontal: 16, marginBottom: 80 }}
          data={listData}
          renderItem={({ item }) => (
            <View>
              <Message message={item} />
              <Response prompt={item} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* Search-Bar */}
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Jerry is always here to help"
            style={styles.input}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            selectionColor={"#323232"}
          ></TextInput>
          <TouchableOpacity onPress={SearchInput}>
            <Image
              source={require("../assets/images/right-arrow.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingTop: 36,
    backgroundColor: "#a5d8ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    margin: 8,
    gap: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
  searchBar: {
    backgroundColor: "#a5d8ff",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 8,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 32,
    borderWidth: 0.1,
  },
});
