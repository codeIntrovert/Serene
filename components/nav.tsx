import { Text, View, Image } from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";
export default function Nav() {
  return (
    <View
      style={tw`w-90% self-center absolute z-100 bottom-6 h-16 bg-red-900 rounded-xl flex-row`}
    >
      <Link href="/chat" style={tw`mx-auto`}>
        <Text style={tw`text-center text-white font-bold text-sm my-4`}>
          Chat
        </Text>
      </Link>
      <Link href="/" style={tw`mx-auto`}>
        <Text style={tw`text-center text-white font-bold text-sm my-4`}>
          Home
        </Text>
      </Link>
      <Link href="/therapist" style={tw`mx-auto`}>
        <Text style={tw`text-center text-white font-bold text-sm my-4`}>
          Therapist
        </Text>
      </Link>
    </View>
  );
}
