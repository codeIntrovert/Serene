import { Text, View, Image } from "react-native";
import tw from "twrnc";

export default function Mood() {
  return (
    <View style={tw`mt-0 mb-4`}>
      <Text style={tw`text-center text-white font-bold text-sm my-4`}>
        Mood Booster
      </Text>
      <View style={tw`w-full h-78 bg-slate-800 rounded-xl`}>
        {/* First row of images */}
        <View style={tw`w-full h-40 bg-slate-800 rounded-xl flex-row px-1`}>
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <Image
              source={require("../assets/images/sleep.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
          </View>
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <Image
              source={require("../assets/images/meditation.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Second row of images */}
        <View
          style={tw`w-full -mt-2 h-40 bg-slate-800 rounded-xl flex-row px-1`}
        >
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <Image
              source={require("../assets/images/motivation.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
          </View>
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <Image
              source={require("../assets/images/mood.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
