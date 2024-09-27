import { Text, View, Image } from "react-native";
import tw from "twrnc";
export default function Achievements() {
  return (
    <View style={tw`mt-4`}>
      <Text style={tw`text-center text-white font-bold text-sm my-3`}>
        Daily Achievements
      </Text>
      <View style={tw`w-full h-40 bg-slate-800 rounded-xl`}></View>
    </View>
  );
}
