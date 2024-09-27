import { Text, View, Image } from "react-native";
import tw from "twrnc";
export default function Achievements() {
  return (
    <View style={tw`mt-px`}>
      <Text style={tw`text-center text-white font-bold text-sm my-3`}>
        Achievements
      </Text>
      <View style={tw`w-full h-40 bg-slate-800 rounded-xl flex-row px-1`}>
        <View
          style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl`}
        ></View>
        <View
          style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl`}
        ></View>
      </View>
    </View>
  );
}
