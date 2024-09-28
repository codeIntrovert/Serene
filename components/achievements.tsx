import { Text, View, Image } from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";
import { SvgXml } from "react-native-svg";
import { useEffect, useState } from "react";

export default function Achievements() {
  const charts = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;

  return (
    <View style={tw`mt-1`}>
      <Text style={tw`text-center text-black font-bold text-base my-3`}>
        Journey
      </Text>
      <View style={tw`w-full h-40 bg-[#F8F9FB] rounded-xl flex-row px-1`}>
        <View
          style={tw`w-98% bg-slate-700 flex h-90% mx-auto my-auto rounded-xl`}
        >
          <Image
            source={require("../assets/images/motivation.png")} // replace with your local image path
            style={tw`w-full h-full rounded-xl`}
            resizeMode="cover"
          />
          <SvgXml
            style={tw`absolute top-6 left-32 mx-auto my-auto`}
            xml={charts}
            width="65"
            height="65"
          />
          <View style={tw` absolute bottom-4 self-center rounded-lg z-100`}>
            <Text style={tw`py-px px-2 text-base text-white font-bold`}>
              Your Weekly Stats
            </Text>
          </View>
          <Link
            href="/analytics"
            style={tw`absolute z-100 mx-auto my-auto h-full w-full`}
          ></Link>
        </View>
      </View>
    </View>
  );
}
