import { Text, View, Image } from "react-native";
import tw from "twrnc";
export default function Calender() {
  return (
    <View style={tw`w-full h-10 bg-[#F8F9FB] mt-12 rounded-xl flex-row px-6`}>
      <Text style={tw`my-auto mx-auto font-semibold text-black`}>M</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-black`}>T</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-black`}>W</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-black`}>T</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-black`}>F</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-black`}>S</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-red-400`}>S</Text>
    </View>
  );
}
