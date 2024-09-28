import { Text, View, Image } from "react-native";
import tw from "twrnc";
export default function Quote() {
  return (
    <View style={tw`mt-0 mb-26`}>
      <Text style={tw`text-center italic text-black font-thin text-sm my-4`}>
        "Live life to the fullest and focus on the positive."
      </Text>
    </View>
  );
}
