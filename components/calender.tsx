import { Text, View, Image } from "react-native";
import tw from "twrnc";
export default function Calender() {
  return (
    <View style={tw`w-full h-10 bg-slate-800 mt-12 rounded-xl flex-row px-6`}>
      <Text style={tw`my-auto mx-auto font-semibold text-white`}>M</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-white`}>T</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-white`}>W</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-white`}>T</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-white`}>F</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-white`}>S</Text>
      <Text style={tw`my-auto mx-auto font-semibold text-red-400`}>S</Text>
    </View>
  );
}
