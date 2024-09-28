import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import Header from "@/components/header";
import tw from "twrnc";

export default function Journal() {
  return (
    <>
      <Header title="Journal" />
      <View style={tw`top-5 flex-row w-full`}></View>
    </>
  );
}
