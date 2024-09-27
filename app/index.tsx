import { Text, View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import Feeling from "@/components/feeling";
import Calender from "@/components/calender";
import Achievements from "@/components/achievements";
import Mood from "@/components/mood";
import Quote from "@/components/quote";
import Nav from "@/components/nav";
import Greet from "@/components/greet";
export default function Index() {
  const username = "Hasan";
  const profileImageUri = "https://picsum.photos/seed/696/3000/2000";
  return (
    <>
      <View style={tw`bg-slate-900 h-8 px-6`}></View>
      <Nav />
      <ScrollView>
        <View style={tw`bg-slate-900 h-full px-6`}>
          <Greet usernameProp={username} />
          <Calender />
          <Feeling />
          <Achievements />
          <Mood />
          <Quote />
        </View>
      </ScrollView>
    </>
  );
}
