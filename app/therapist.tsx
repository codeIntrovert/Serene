import { Text, View, Image, ScrollView } from "react-native";
import Nav from "@/components/nav";
import tw from "twrnc";
export default function Therapist() {
  return (
    <View style={tw``}>
      <Nav />
      <>
        <View style={tw`bg-slate-900 h-8 px-6`}></View>
        <View style={tw`bg-slate-900 h-full px-6`}>
          <Text style={tw`my-6 font-bold text-white text-2xl `}>
            Help is always near
          </Text>
          <ScrollView>
            <View style={tw`h-40 rounded-2xl w-full bg-slate-800`}>
              <View></View>
            </View>
          </ScrollView>
        </View>
      </>
    </View>
  );
}
