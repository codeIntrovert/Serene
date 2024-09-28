import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import tw from "twrnc";

interface HeaderProps {
  usernameProp: string;
}
export default function Greet({ usernameProp }: HeaderProps) {
  return (
    <View style={tw`top-5 flex-row w-full`}>
      <Text style={tw`font-bold text-black text-2xl`}>
        Hey {usernameProp} !
      </Text>
      <Link
        href="/analytics"
        style={tw`border-2 border-slate-800 absolute right-0 w-9 h-9 rounded-full z-100`}
      ></Link>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={tw`border-2 border-slate-800 absolute right-0 bg-green-400 w-9 h-9 rounded-full`}
      />
    </View>
  );
}
