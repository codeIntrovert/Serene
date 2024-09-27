import { Text, View, Image } from "react-native";
import tw from "twrnc";
export default function Mood() {
  return (
    <View style={tw`mt-0 mb-4`}>
      <Text style={tw`text-center text-white font-bold text-sm my-4`}>
        Mood Booster
      </Text>
      <View style={tw`w-full h-80 bg-slate-800 rounded-xl`}></View>
    </View>
  );
}
